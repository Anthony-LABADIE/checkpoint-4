/* eslint-disable camelcase */
const libraryModel = require("../models/libraryModel");

const libraryController = {
  getAllLibrary: (_, res) => {
    libraryModel
      .findAll()
      .then((library) => res.send(library))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  postLibrary: (req, res) => {
    const { film_id, user_id } = req.body;
    libraryModel
      .createOne({
        film_id,
        user_id,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          film_id,
          user_id,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteLibrary: (req, res) => {
    const { id } = req.params;
    libraryModel
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
  updateLibrary: (req, res) => {
    const { id } = req.params;
    const remarque = req.body;
    libraryModel
      .updateOne(remarque, id)
      .then((Library) => res.send(Library))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = libraryController;
