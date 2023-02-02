const database = require("../../config");

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM film")
    .then(([res]) => res);
};
const findByUser = (id) => {
  return database
    .promise()
    .query(
      "SELECT library.id, library.remarque, film.title, film.release_date, film.duration, film.genre, film.realisateur_id, film.id_status, film.id_library, film.image, film.affiche, user.firstname, user.lastname FROM library JOIN film ON library.film_id = film.id  JOIN user ON library.user_id = user.id WHERE user_id =?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM film WHERE id =?", [Number(id)])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO film SET ?", [payload])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM film WHERE id = ?", [id])
    .then(([res]) => res);
};

const updateOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE film SET ? Where id = ?", [payload, id])
    .then(([res]) => res);
};
module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne,
  findByUser,
};
