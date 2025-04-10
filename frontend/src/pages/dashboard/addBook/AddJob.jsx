import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import InputField from "./inputField";

const AddJob = () => {
  const { register, handleSubmit } = useForm();
  const [logoFile, setLogoFile] = useState(null);
  const [logoFileName, setLogoFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const onSubmit = async (data) => {
  //   const newBookData = {
  //     ...data,
  //     coverImage: logoFileName, // only file inside the asset can be inputed
  //   };
  //   try {
  //     await addBook(newBookData).unwrap();
  //     Swal.fire({
  //       title: "New book Added1",
  //       text: "Your new book has been added successfully",
  //       icon: "success",
  //       confirmButtonColor: "#3085d6",
  //       confirmButtonText: "Yes, It's Okay!",
  //     });
  //     reset();
  //     setimageFileName("");
  //     setimageFile(null);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to add book. Please try again.");
  //   }
  // };

  // this function here handleFileChange is for uploading imageFile and imageFileName
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
      <form onSubmit="" className="">
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
            onChange={handleFileChange} // onChange works with useState(triggers when the user selects a file)
            className="mb-2 w-full dark:text-gray-200"
          />
          {logoFileName && (
            <p className="text-sm text-gray-500">Selected: {logoFileName}</p>
          )}
        </div>
        {/* Min Price */}
        <InputField
          label="MinPrice"
          name="MinPrice"
          type="number"
          placeholder="Min Price"
          register={register}
        />
        {/* Max Price */}
        <InputField
          label="MaxPrice"
          name="  MaxPrice"
          type="number"
          placeholder="MaxPrice"
          register={register}
        />
        <InputField
          label="JobLocation"
          name="  jobLocation"
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
          name="exprienceLevel"
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
