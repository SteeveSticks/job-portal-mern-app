import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
// import { data } from "./job";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgURL";
import { motion } from "framer-motion";
import getBaseURL from "../../utils/getBaseURL";

const JobPage = ({ search, location }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // fitler jobs based on search input
  const filteredJobs = jobs.filter(
    (item) =>
      item.jobTitle.toLowerCase().includes(search.toLowerCase()) &&
      item.jobLocation.toLowerCase().includes(location.toLowerCase())
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${getBaseURL()}/api/jobs/`, {
          method: "GET",
        });

        console.log(response);

        const data = await response.json();

        console.log(data);

        if (!response.ok)
          throw new Error(data.message || "Failed to fetch jobs");

        setJobs(data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // runs once

  if (loading) return <div>Loading jobs...</div>;

  return (
    <>
      <div className="mt-10 bg-[rgb(250,250,250)] md:grid grid-cols-2 lg:px-24 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }} // stagggerd effect from below
              whileInView={{ opacity: 1, y: 0 }} //Animate into view
              viewport={{ once: false, amount: 0.3 }} // Reanimate the scroll
              whileHover={{ scale: 1.05, y: -5 }} // Slight zoom + lift on hover
              whileTap={{ scale: 0.95 }} //shrink when clicked
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={item._id || index}
              className="flex w-full border md:p-2 shadow-sm mt-24 rounded-sm flex-col sm:flex-row gap-2 p-4"
            >
              {/* Image */}
              <div className="">
                <img
                  src={`${getImgUrl(item.companyLogo)}`}
                  alt="jobLogos"
                  className="w-[100%] sm:h-[30%] object-contain relative bottom-2 h-24"
                />
              </div>

              {/* Info section */}
              <div className="">
                <h3 className="text-primary/80 text-sm mb-2">
                  {item.companyName}
                </h3>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Link
                    to="/job/id"
                    className="text-lg text-primary/80 font-bold hover:text-gray-600"
                  >
                    {item.jobTitle}
                  </Link>
                  <p className="bg-purple-200 text-purple-500 text-xs rounded-sm px-2 py-0.5">
                    New post
                  </p>
                </div>

                {/* Job Info */}
                <div className="flex gap-3 mb-2 flex-wrap text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FiMapPin className="text-sm text-gray-400" />
                    <h5 className="text-sm text-gray-400">
                      {item.jobLocation}
                    </h5>
                  </div>

                  <div className="flex items-center gap-1">
                    <CiClock2 className="text-sm text-gray-400 " />
                    <h5 className="text-sm text-gray-400 ">
                      {item.employmentType}
                    </h5>
                  </div>

                  <div className="flex items-center gap-1">
                    <BiDollar className="text-sm text-gray-400 " />
                    <div className="text-sm text-gray-400 ">
                      {item.minPrice} -
                    </div>
                    <div className="text-sm text-gray-400 ">
                      {item.maxPrice}k
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <SlCalender className="text-sm text-gray-400 " />
                    <h5 className="text-sm text-gray-400 ">
                      {item.postingDate.split("T")[0]}
                    </h5>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className=" text-end">
                  <Link
                    to={`/job/${item._id}`}
                    className="px-3 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE]"
                  >
                    Apply now!
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full mt-5">
            No jobs found for "{search}" in "{location}"
          </p>
        )}
      </div>

      <Link
        to="/all-jobs"
        className="text-sm text-secondary text-center w-full inline-block mt-9"
      >
        More jobs.....
      </Link>
    </>
  );
};

export default JobPage;
