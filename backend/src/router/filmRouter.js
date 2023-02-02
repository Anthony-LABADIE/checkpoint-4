const express = require("express");

const filmRouter = express.Router();

const filmController = require("../controllers/filmControllers");

filmRouter.get("/", filmController.getAllFilm);
filmRouter.get("/library/:id", filmController.getFilmByUser);
filmRouter.get("/:id", filmController.getOneFilm);
filmRouter.post("/", filmController.postFilm);
filmRouter.put("/:id", filmController.updateFilm);
filmRouter.delete("/:id", filmController.deleteFilm);

module.exports = filmRouter;
