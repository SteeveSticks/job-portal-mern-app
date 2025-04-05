import React, { useEffect, useState } from "react";
import { getImgUrl } from "../../utils/getImgURL";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { Link, useNavigate, useParams } from "react-router-dom";
import getBaseURL from "../../utils/getBaseURL";
import toast from "react-hot-toast";

const SingleJobPage = () => {
  const { id } = useParams(); // this get the job ID from the URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const response = await fetch(`${getBaseURL()}/api/jobs/${id}`, {
          method: "GET",
        });

        console.log(response);

        const data = await response.json();
        console.log(data);
        if (!response.ok)
          throw new Error(data.message || "Failed to fetch jobs by id");

        setJob(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch jobs by id:", error);
        setLoading(false);
      }
    };

    fetchSingleJob();
  }, [id]); // Fetch data whenever the id changes

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (file) {
      // Validate file types (allow only PDF & DOCX)
      const allowTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowTypes.includes(file.type)) {
        alert("Only PDF & DOCX are allowed");
        return;
      }
    }

    // Validate file sizes (e.g., max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      toast.error("File size should not exceed 5MB.");
    }

    // Update state
    setResumeFile(file);
    setResumeFileName(file.name);
  };

  const handleCheckBoxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = () => {
    if (!isChecked || !resumeFile) {
      toast.error("Please upload a resume and accept terms to apply.");
      return;
    }

    toast.success("Terms accepted! Proceeding to application...");
    navigate("/form");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg shadow-md p-5 mt-24 rounded-sm">
        <div className="flex items-center justify-center">
          <img
            src={`${getImgUrl(job?.companyLogo)}`}
            alt="jobLogo"
            className="w-[50%] h-[30%] object-contain relative bottom-2 overflow-hidden"
          />
        </div>

        <div>
          <h3 className="text-primary/80 text-md font-medium mt-8 mb-2">
            <span className="text-md font-bold">CompanyName: </span>
            {job?.companyName}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <Link className="text-lg text-primary/80 font-bold hover:text-gray-600">
              {job.jobTitle}
            </Link>
            <p className="bg-purple-200 text-purple-500 text-sm rounded-sm px-2">
              New post
            </p>
          </div>

          <div className="flex gap-3 mb-3">
            <div className="flex items-center gap-1">
              <FiMapPin className="text-sm text-gray-400" />
              <h5 className="text-sm text-gray-400">{job?.jobLocation}</h5>
            </div>

            <div className="flex items-center gap-1">
              <CiClock2 className="text-sm text-gray-400 " />
              <h5 className="text-sm text-gray-400 ">{job?.employmentType}</h5>
            </div>

            <div className="flex items-center gap-1">
              <BiDollar className="text-sm text-gray-400 " />
              <div className="text-sm text-gray-400 ">{job?.minPrice} -</div>
              <div className="text-sm text-gray-400 ">{job?.maxPrice}k</div>
            </div>

            <div className="flex items-center gap-1">
              <SlCalender className="text-sm text-gray-400 " />
              <h5 className="text-sm text-gray-400 ">
                {job?.postingDate.split("T")[0]}
              </h5>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">{job.description}</p>

          <div className="flex items-center justify-between mt-14 shadow-sm">
            <div className="py-1 px-1">
              <label>
                <p className="text-gray-500 mb-1">
                  <span className="text-blue-400">Upload</span> resume to
                  <span className="text-blue-400"> Apply</span>
                </p>
              </label>
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              {resumeFileName && (
                <p className="text-sm text-gray-500 mt-1">
                  Selected: {resumeFileName}
                </p>
              )}
            </div>

            <div className="">
              <button
                onClick={handleSubmit}
                className="px-6 py-1.5 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] mr-5"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-5">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="checkbox" className="text-sm text-primary ml-2">
              By applying you agree to the
              <span className="text-blue-500 underline underline-offset-2">
                Terms & Condition
              </span>
              and
              <span className="text-blue-500 underline underline-offset-2">
                Job Policy.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobPage;
