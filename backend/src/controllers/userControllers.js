const argon2 = require("argon2");
const { validationResult } = require("express-validator");
const { jwtSign } = require("../helpers/jwt");
const userModel = require("../models/userModel");

const userController = {
  getAllUser: (_, res) => {
    userModel
      .findAll()
      .then((user) => res.send(user))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  getOneUser: (req, res) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then((user) => {
        if (user.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(user[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  // eslint-disable-next-line consistent-return
  postUser: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    userModel
      .createOne({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      })
      .then((result) =>
        res.status(201).send({
          message: "user created",
          id: result.insertId,
          email,
          firstname,
          lastname,
        })
      )
      .catch((err) => next(err));
  },
  login: (req, res, next) => {
    const { email, password } = req.body;

    userModel
      .findByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ error: "invalid email" });
        } else {
          const {
            id,
            email: userEmail,
            firstname,
            lastname,
            password: hashedPassword,
          } = user;
          if (await argon2.verify(hashedPassword, password)) {
            const token = jwtSign(
              { id, email: userEmail, firstname, lastname },
              {
                expiresIn: "1h",
              }
            );
            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: true,
              })
              .status(200)
              .send({
                message: "Logged in",
                id,
                email,
                firstname,
                lastname,
              });
          } else {
            res.status(404).send("Wrong password");
          }
        }
      })
      .catch((err) => next(err));
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    userModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`User ${id} not found`);
        }
        return res.status(200).send(`User ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    userModel
      .updateOne(userData, id)
      .then((user) => res.send(user))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = userController;
