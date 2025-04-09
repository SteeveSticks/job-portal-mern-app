const express = require("express");
const { EmployerLogin } = require("./employerController");
const router = express.Router();

// logIn admin
router.post("/login", EmployerLogin);

// export
module.exports = router;
