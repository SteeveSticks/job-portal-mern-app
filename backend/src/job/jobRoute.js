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
const verifyEmployerToken = require("../middleware/verifyEmployerToken");
const router = express.Router();

// post a job with file upload
router.post(
  "/create-job",
  upload.single("companyLogo"),
  verifyEmployerToken,
  postAJob
);
// get all jobs
router.get("/", getAllJobs);
// get single job
router.get("/:id", getSingleJob);
// upadate a job with file upload
router.put(
  "/:id",
  upload.single("companyLogo"),
  verifyEmployerToken,
  updateJob
);
// delete a job
router.delete("/:id", verifyEmployerToken, deleteAJob);

module.exports = router;
