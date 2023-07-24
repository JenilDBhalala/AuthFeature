const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const validateUser = require("../middlewares/validator.middleware")

router.post("/signup", validateUser, authController.signupUser);
router.post("/signin", validateUser, authController.signinUser);

module.exports = router;