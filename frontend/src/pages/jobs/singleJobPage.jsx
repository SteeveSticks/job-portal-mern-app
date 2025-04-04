import React, { useEffect, useState } from "react";
import { getImgUrl } from "../../utils/getImgURL";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import getBaseURL from "../../utils/getBaseURL";
import axios from "axios";

const SingleJobPage = () => {
  const { id } = useParams(); // this get the job ID from the URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg shadow-md p-5 mt-24 rounded-sm">
        <div>
          <img
            src={`${getImgUrl(job?.companyLogo)}`}
            alt="jobLogo"
            className="w-[100%] h-[30%] object-contain relative bottom-2 overflow-hidden"
          />
        </div>

        <div className="">
          <h3 className="text-primary/80 text-sm mb-2">{job?.companyName}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Link className="text-lg text-primary/80 font-bold hover:text-gray-600">
              {job.jobTitle}
            </Link>
            <p className="bg-purple-200 text-purple-500 text-sm rounded-sm px-2">
              New post
            </p>
          </div>

          <div className="flex gap-3 mb-2">
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

          <p className="text-sm text-gray-400 mb-2">{job.description}</p>

          <div className="flex justify-between text-end mt-4">
            <div>
              <Link
                to="/form"
                className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] mr-5"
              >
                Apply
              </Link>
            </div>

            <div>
              <Link
                to="/form"
                className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] mr-5"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobPage;
