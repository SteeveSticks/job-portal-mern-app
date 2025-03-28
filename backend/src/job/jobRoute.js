const express = require("express");
const {
  postAJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteAJob,
  // getJobByEmail,
} = require("./jobController");
const { upload } = require("../config/cloudinary/cloudinary");
const router = express.Router();

// post a job with file upload
router.post("/create-job", upload.single("companyLogo"), postAJob);
// get all jobs
router.get("/", getAllJobs);
// get single job
router.get("/:id", getSingleJob);
// upadate a job with file upload
router.put("/:id", upload.single("companyLogo"), updateJob);
// delete a job
router.delete("/:id", deleteAJob);

module.exports = router;
