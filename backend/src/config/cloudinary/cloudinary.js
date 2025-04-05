const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "job_logo", // the folder where the company logo will be stored
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const resumeStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "job_portal/resumes", // creates a seprate folder for resumes
    resource_type: "raw", // tell cloudinary your uploading raw files not images
    allowed_formats: ["pdf", "doc", "docx"],
  },
});

const upload = multer({ storage });
const uploadResume = multer({ storage: resumeStorage });

// export
module.exports = { upload, cloudinary, uploadResume };
