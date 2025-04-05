const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadApplication } = require("./applicationController");

// File Upload Setup
const storage = multer.diskStorage({});
const upload = multer({ storage });

// post a resume with cloudinary file upload
router.post("/apply", upload.single("resume"), uploadApplication);

// exports
module.exports = router;
