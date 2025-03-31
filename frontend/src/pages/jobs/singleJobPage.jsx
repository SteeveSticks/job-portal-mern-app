import React from "react";

import { getImgUrl } from "../../utils/getImgURL";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const SingleJobPage = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex w-full border gap-2 p-2  shadow-sm mt-24 rounded-sm">
        <div>
          <img
            src={`${getImgUrl()}`}
            alt="jobLogo"
            className="w-[100%] h-[30%] object-contain relative bottom-2 overflow-hidden"
          />
        </div>

        <div className="">
          <h3 className="text-primary/80 text-sm mb-2">{}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Link
              to="/job/id"
              className="text-lg text-primary/80 font-bold hover:text-gray-600"
            >
              {}
            </Link>
            <p className="bg-purple-200 text-purple-500 text-sm rounded-sm px-2">
              New post
            </p>
          </div>

          <div className="flex gap-3 mb-2">
            <div className="flex items-center gap-1">
              <FiMapPin className="text-sm text-gray-400" />
              <h5 className="text-sm text-gray-400">{Location}</h5>
            </div>

            <div className="flex items-center gap-1">
              <CiClock2 className="text-sm text-gray-400 " />
              <h5 className="text-sm text-gray-400 ">{}</h5>
            </div>

            <div className="flex items-center gap-1">
              <BiDollar className="text-sm text-gray-400 " />
              <div className="text-sm text-gray-400 ">{}-</div>
              <div className="text-sm text-gray-400 ">{}k</div>
            </div>

            <div className="flex items-center gap-1">
              <SlCalender className="text-sm text-gray-400 " />
              <h5 className="text-sm text-gray-400 ">{}</h5>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-2">{}</p>

          <div className=" text-end mt-4">
            <Link
              to="/form"
              className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] mr-5"
            >
              Apply now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobPage;
