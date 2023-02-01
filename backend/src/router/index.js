const express = require("express");
const userRouter = require("./userRouter");
const filmRouter = require("./filmRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/film", filmRouter);

module.exports = router;
