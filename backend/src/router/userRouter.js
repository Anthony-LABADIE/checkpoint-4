const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userControllers");
const emailAlreadyExistsMiddleware = require("../middleware/emailAlreadyExist");
const authentication = require("../helpers/authentication");
const userValidationMiddleware = require("../middleware/validator");
const credentialsCheck = require("../middleware/credentialsCheck");

userRouter.get("/", authentication, userController.getAllUser);
userRouter.get("/:id", userController.getOneUser);
userRouter.post(
  "/",
  emailAlreadyExistsMiddleware,
  userValidationMiddleware,
  userController.postUser
);
userRouter.post("/login", credentialsCheck, userController.login);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
