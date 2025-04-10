import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import InputField from "./inputField";
import getBaseURL from "../../../utils/getBaseURL";
import toast from "react-hot-toast";

const AddJob = () => {
  const { register, handleSubmit, reset } = useForm();
  const [logoFile, setLogoFile] = useState(null);
  const [logoFileName, setLogoFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      // Append all text fields
      for (const key in data) {
        formData.append(key, data[key]);
      }

      // Append logo with the correct key name
      if (logoFile) {
        formData.append("companyLogo", logoFile); // Backend expects the name "companyLogo"
      }

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Access Denied! No token provided");
      }

      const response = await fetch(`${getBaseURL()}/api/jobs/create-job`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // Only pass token, NOT Content-Type
        },
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Failed to add job");

      console.log(result);

      Swal.fire({
        title: "New Job Added",
        text: "Your new Job has been added successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, It's Okay!",
      });

      reset();
      setLogoFile(null);
      setLogoFileName("");
    } catch (error) {
      console.log("Failed to add book :", error);
      console.error(error);
      toast.error("Failed to add book. Please try again.");
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
        Add New Job
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
          className="w-full py-2 bg-gray-300 text-white font-bold rounded-md dark:bg-gray-500"
        >
          {isLoading ? (
            <span className="">Adding.. </span>
          ) : (
            <span>Add Job!</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddJob;
