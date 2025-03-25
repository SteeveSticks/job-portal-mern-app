const express = require("express");
const { register, logIn, googleSignin } = require("./authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", logIn);
router.post("/google-signin", googleSignin);

module.exports = router;
