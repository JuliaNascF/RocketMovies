const {Router}= require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UserAvatarController = require("../controllers/UserAvatarController");
const UsersController = require("../controllers/Users.controller")
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer( uploadConfig.MULTER);

const userAvatarController = new UserAvatarController();
const usersController = new UsersController;



usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated ,usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated , upload.single("avatar"), userAvatarController.update);
module.exports = usersRoutes; 
