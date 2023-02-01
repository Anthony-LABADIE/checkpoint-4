const database = require("../../config");

/* Model User pour chaque donnée de la table User */

/* Modes pour récupérer les USERS */

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM film")
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
};