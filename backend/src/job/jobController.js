const Job = require("./jobModel");
const { upload, cloudinary } = require("../config/cloudinary/cloudinary");

// controller function to create a job
const postAJob = async (req, res) => {
  try {
    const {
      companyName,
      jobTitle,
      minPrice,
      maxPrice,
      jobLocation,
      postingDate,
      experienceLevel,
      employmentType,
      description,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Company logo is required!" });
    }

    // extract public_id correctly
    const companyLogoUrl = req.file.path; // cloudinary URL
    const companyLogoPublicId =
      req.file.filename || req.file.path.split("/").pop().split(".")[0];

    // saving the job details in DB in Cloudinary URL
    const newJob = new Job({
      companyName,
      companyLogo: companyLogoUrl, // stores cloudinary URL
      companyLogoPublicId, //stores the cloudinary public_id
      jobTitle,
      minPrice,
      maxPrice,
      jobLocation,
      postingDate,
      experienceLevel,
      employmentType,
      description,
    });

    await newJob.save();
    res.status(201).json({
      message: "Job posted succesfully",
      job: newJob,
      public_id: companyLogoPublicId,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Failed to post a job!" });
  }
};

// controller function to get all the jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json({ jobs });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Error getting all jobs" });
  }
};

// controller function to get a single job
const getSingleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      return res.status(401).json({ message: "Job not found!" });
    }

    res.status(201).json(job);
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json("Error getting a single job");
  }
};

// controller function to update a job
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      return res.status(401).json({ message: "job not found!" });
    }

    let updatedData = { ...req.body };

    // delete old image
    if (req.file) {
      if (job.companyLogo) {
        const publicId = job.companyLogo.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`job_logo/${publicId}`);
      }
    }

    const companyLogoUrl = req.file.path;
    const companyLogoPublicId =
      req.file.filename || req.file.path.split("/").pop().split(".")[0];

    // update with new cloudinary URL(img)
    updatedData.companyLogo = companyLogoUrl;
    updatedData.companyLogoPublicId = companyLogoPublicId;

    const updatedJob = await Job.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(201).json({
      message: "Job updated succesfully",
      job: updatedJob,
      public_id: companyLogoPublicId,
    });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Error updating the job!" });
  }
};

// controller function to delete a job
const deleteAJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(401).json({ message: "Job not found!" });
    }

    // delete image from cloudinary
    if (deletedJob.companyLogo) {
      const publicId = deletedJob.companyLogo.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`job_logo/${publicId}`);
    }

    res.status(201).json({ message: "Job deleted succesfully" });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Error deleting a job!" });
  }
};
module.exports = {
  postAJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteAJob,
};
