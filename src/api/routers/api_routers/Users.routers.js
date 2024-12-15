const express = require("express");
const router = express.Router();
const {validateToken} = require("../../middleware/auth")
const {register,login, profile} = require("../../controllers/Users.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", validateToken, profile )


module.exports = router

