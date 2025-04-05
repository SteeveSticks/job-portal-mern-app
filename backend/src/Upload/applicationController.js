const { cloudinary } = require("../config/cloudinary/cloudinary");
const Application = require("./applicationModel");

// controller function to upload a resume
const uploadApplication = async (req, res) => {
  try {
    const { jobId, applicantEmail } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume is required!" });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "job_portal/resumes",
      resource_type: "auto",
    });

    const newApplication = new Application({
      jobId,
      applicantEmail,
      resumeUrl: result.secure_url,
    });

    await newApplication.save();

    res.status(201).json({
      message: "Application submitted :",
      application: newApplication,
    });
  } catch (error) {
    console.log("Failed to upload resume :", error);
    res.status(500).json({ message: "Error uploading resume" });
  }
};

// export
module.exports = { uploadApplication };
