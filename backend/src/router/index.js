const express = require("express");
const userRouter = require("./userRouter");
const filmRouter = require("./filmRouter");
const libraryRouter = require("./libraryRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/film", filmRouter);
router.use("/library", libraryRouter);

module.exports = router;
