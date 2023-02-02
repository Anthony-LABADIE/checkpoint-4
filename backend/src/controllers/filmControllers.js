/* eslint-disable camelcase */
const filmModel = require("../models/filmModel");

const filmController = {
  getAllFilm: (_, res) => {
    filmModel
      .findAll()
      .then((film) => res.send(film))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  getFilmByUser: (req, res) => {
    const { id } = req.params;
    filmModel
      .findByUser(id)
      .then((film) => res.send(film))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  getOneFilm: (req, res) => {
    const { id } = req.params;
    filmModel
      .findOne(id)
      .then((film) => {
        if (film.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(film[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  postFilm: (req, res) => {
    const {
      title,
      release_date,
      duration,
      genre,
      realisateur_id,
      id_status,
      id_library,
    } = req.body;
    filmModel
      .createOne({
        title,
        release_date,
        duration,
        genre,
        realisateur_id,
        id_status,
        id_library,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          title,
          release_date,
          duration,
          genre,
          realisateur_id,
          id_status,
          id_library,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteFilm: (req, res) => {
    const { id } = req.params;
    filmModel
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
  updateFilm: (req, res) => {
    const { id } = req.params;
    const filmData = req.body;
    filmModel
      .updateOne(filmData, id)
      .then((user) => res.send(user))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = filmController;
