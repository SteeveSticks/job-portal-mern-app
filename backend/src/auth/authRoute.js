const express = require("express");
const { register, logIn, googleSignin } = require("./authController");
const router = express.Router();

// Register a user
router.post("/register", register);

// Login a user
router.post("/login", logIn);

// Google sign in for a user
router.post("/google-signin", googleSignin);

// get job by their email
// router.get("/email", getJobByEmail);

module.exports = router;
