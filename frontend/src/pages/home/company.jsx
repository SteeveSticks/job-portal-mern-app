import React from "react";
import macDonals from "../../assets/mac-company-1.png";
import google from "../../assets/google-company-logo-3.png";
import iphone from "../../assets/iphone-logo-company-2.png";
import { Link } from "react-router-dom";

const company = () => {
  return (
    <div className="grid py-40 px-36">
      <div className="w-full inline-block text-center ">
        <h1 className="font-bold text-4xl text-black mb-12">
          You're in good company
        </h1>
        <p className="text-primary text-xl mb-12">
          Over 500,000 companies use StevHire to hire and get jobs. See why
          these <br /> amazing companies use us as their platform to hire dream
          talent.
        </p>
      </div>

      <div className="flex gap-5">
        <div className="border p-3 grid items-center justify-center text-center px-4 h-96 w-7/12 text-wrap rounded-lg shadow-md">
          <div>
            <img
              src={macDonals}
              alt="macDonals img"
              className="w-[30%] h-[30%] object-cover overflow-hidden  inline-block"
            />
          </div>
          <p className="text-start text-gray-500  text-base font-medium">
            " Indeed helps the world’s largest family restaurant business to
            recruit high quality candidates for its hard-to-fill positions. "
          </p>
        </div>

        <div className="border p-3 grid items-center justify-center text-center px-4 h-96 w-7/12 text-wrap rounded-lg shadow-md">
          <div>
            <img
              src={google}
              alt="google img"
              className="w-[30%] h-[30%] object-cover overflow-hidden  inline-block"
            />
          </div>
          <p className="text-start text-gray-500  text-base font-medium">
            "This platform is redefining the way job seekers and employers
            connect—fast, efficient, and built for the future of work."
          </p>
        </div>

        <div className="border p-3 grid items-center justify-center text-center px-4 h-96 w-7/12 text-wrap rounded-lg shadow-md">
          <div>
            <img
              src={iphone}
              alt="iphone img"
              className="w-[50%] h-[50%] object-cover overflow-hidden  inline-block"
            />
          </div>
          <p className="text-start text-gray-500  text-base font-medium">
            "Seamlessly designed and incredibly intuitive—this job portal makes
            finding the right opportunity as smooth as using an iPhone."
          </p>
        </div>
      </div>

      <div className="mt-40 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-primary mb-6">
          Get started in minutes!
        </h1>
        <div className="flex mb-1 gap-3">
          <Link
            to="/all-jobs"
            className="px-3 py-2 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] "
          >
            Apply for Jobs
          </Link>
          <Link
            to="/log-in"
            className="px-3 py-2 text-black bg-transparent border text-sm rounded"
          >
            Post a Job
          </Link>
        </div>
        <span className="text-base text-gray-400 mt-1">
          StevHire (worldwide)
        </span>
      </div>
    </div>
  );
};

export default company;
