const express = require("express");

const libraryRouter = express.Router();

const libraryController = require("../controllers/libraryController");

libraryRouter.get("/", libraryController.getAllLibrary);
// libraryRouter.get("/library", libraryController.getFilmByUser);
// libraryRouter.get("/:id", libraryController.getOneFilm);
libraryRouter.post("/", libraryController.postLibrary);
libraryRouter.put("/:id", libraryController.updateLibrary);
libraryRouter.delete("/:id", libraryController.deleteLibrary);

module.exports = libraryRouter;
