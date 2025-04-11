import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import getBaseURL from "../../../utils/getBaseURL";
import toast from "react-hot-toast";
import InputField from "../addJob/inputField";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [logoFile, setLogoFile] = useState(null);
  const [logoFileName, setLogoFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jobData, setJobData] = useState();
  const { id } = useParams();

  useEffect(() => {
    // Fetch job data on load and set it to te state and inputs
    const fetchJobData = async () => {
      try {
        const response = await fetch(`${getBaseURL()}/api/jobs/${id}`);
        const data = await response.json();
        if (!response.ok)
          throw new Error(data.message || "Failed to fetch job data");

        setJobData(data); // set Jobs data

        // Populate the form fields with fetched job data
        setValue("companyName", data.companyName);
        setValue("jobTitle", data.jobTitle);
        setValue("companyLogo", data.companyLogo);
        setValue("minPrice", data.minPrice);
        setValue("maxPrice", data.maxPrice);
        setValue("jobLocation", data.jobLocation);
        setValue("postingDate", data.postingDate);
        setValue("experienceLevel", data.experienceLevel);
        setValue("employmentType", data.employmentType);
        setValue("description", data.description);
      } catch (error) {
        console.log("Error fetching job data :", error);
        console.error(error);
      }
    };

    fetchJobData();
  }, [id, setValue]); // Run when the component mounts or the id changes

  const onSubmit = async (data) => {
    setIsLoading(true);

    console.log("Submit triggered"); // Check if this gets logged
    if (!logoFile) {
      alert("Please upload a company logo!");
      return;
    }
    const updateJobData = {
      companyName: data.companyName,
      jobTitle: data.jobTitle,
      companyLogo: data.companyLogo,
      minPrice: Number(data.minPrice),
      maxPrice: Number(data.maxPrice),
      jobLocation: data.jobLocation,
      postingDate: data.postingDate,
      experienceLevel: data.experienceLevel,
      employmentType: data.employmentType,
      description: data.description,
    };

    try {
      const formData = new FormData();

      // Append all text fields
      for (const key in data) {
        formData.append(key, data[key]);
      }

      // Append logo with the correct key name
      if (logoFile) {
        formData.append("companyLogo", logoFile);
      }

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Acces Denied! No token provided");
      }

      console.log("Token :", token);

      const response = await fetch(`${getBaseURL()}/api/jobs/${id}`, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Failed to update job");

      setJobData(result); // Update the state with the new job data
      Swal.fire({
        title: "Job Updated",
        text: "Your job is updated successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, It's Okay!",
      });
      return;
    } catch (error) {
      console.log("Failed to update book:", error);
      console.error(error);
      toast.error("Error : Failed to update job! Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // gets the file selected by the user
    if (file) {
      setLogoFile(file);
      setLogoFileName(file.name);
    }
  };

  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">
        Update Job
      </h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* Reusable Input Field for CompanyName */}
        <InputField
          label="companyName"
          name="companyName"
          placeholder="Enter Company Name"
          register={register}
        />
        {/* Reusable Input Field for Title */}
        <InputField
          label="JobTitle"
          name="jobTitle"
          placeholder="Enter Job title"
          register={register}
        />
        {/* Cover Logo Upload */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
            CompanyLogo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2 w-full dark:text-gray-200"
          />
          {logoFileName && (
            <p className="text-sm text-gray-500">Selected: {logoFileName}</p>
          )}
        </div>
        {/* Min Price */}
        <InputField
          label="MinPrice"
          name="minPrice"
          type="number"
          placeholder="Min Price"
          register={register}
        />
        {/* Max Price */}
        <InputField
          label="MaxPrice"
          name="maxPrice"
          type="number"
          placeholder="MaxPrice"
          register={register}
        />
        <InputField
          label="JobLocation"
          name="jobLocation"
          type="text"
          placeholder="Enter Job Location "
          register={register}
        />
        <InputField
          label="PostingDate"
          name="postingDate"
          type="date"
          placeholder="Enter Posting date"
          register={register}
        />
        <InputField
          label="ExprienceLevel"
          name="experienceLevel"
          type="text"
          placeholder="Enter Expirence Level"
          register={register}
        />
        <InputField
          label="EmploymentType"
          name="employmentType"
          type="text"
          placeholder="Enter Employment Type"
          register={register}
        />
        {/* Reusable Textarea for Description */}
        <InputField
          label="Description"
          name="description"
          placeholder="Enter job description"
          type="textarea"
          register={register}
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-300 text-white font-bold rounded-md dark:bg-blue-500"
        >
          {isLoading ? (
            <span className="">Updating.. </span>
          ) : (
            <span>Update Job!</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateJob;
