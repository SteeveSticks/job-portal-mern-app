import React from "react";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { data } from "./job";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgURL";

const JobPage = ({ search, location }) => {
  // fitler jobs based on search input
  const filteredJobs = data.filter(
    (item) =>
      item.jobTitle.toLowerCase().includes(search.toLowerCase()) &&
      item.jobLocation.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
      <div className="mt-10 bg-[rgb(250,250,250)] md:grid grid-cols-2 lg:px-24 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((item, index) => (
            <div
              key={item._id || index}
              className="flex w-full border gap-2 p-2  shadow-sm mt-24 rounded-sm"
            >
              <div>
                <img
                  src={`${getImgUrl(item.companyLogo)}`}
                  alt="jobLogos"
                  className="w-[100%] h-[30%] object-contain relative bottom-2 overflow-hidden"
                />
              </div>

              <div className="">
                <h3 className="text-primary/80 text-sm mb-2">
                  {item.companyName}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Link
                    to="/job/id"
                    className="text-lg text-primary/80 font-bold hover:text-gray-600"
                  >
                    {item.jobTitle}
                  </Link>
                  <p className="bg-purple-200 text-purple-500 text-sm rounded-sm px-2">
                    New post
                  </p>
                </div>

                <div className="flex gap-3 mb-2">
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
                      {item.minPrice}-
                    </div>
                    <div className="text-sm text-gray-400 ">
                      {item.maxPrice}k
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <SlCalender className="text-sm text-gray-400 " />
                    <h5 className="text-sm text-gray-400 ">
                      {item.postingDate}
                    </h5>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-2">{item.description}</p>

                <div className=" text-end mt-4">
                  <Link
                    to={`/job/${item._id}`}
                    className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] mr-5"
                  >
                    Apply now!
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-2 mt-5">
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
