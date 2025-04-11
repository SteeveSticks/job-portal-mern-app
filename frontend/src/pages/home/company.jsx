import React from "react";
import macDonals from "../../assets/mac-company-1.png";
import google from "../../assets/google-company-logo-3.png";
import iphone from "../../assets/iphone-logo-company-2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <div className="py-24 px-4 sm:px-10 lg:px-36 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-3xl sm:text-4xl text-black mb-6">
          You're in good company
        </h1>
        <p className="text-primary text-base sm:text-lg">
          Over 500,000 companies use StevHire to hire and get jobs. See why
          these <br className="hidden sm:inline" /> amazing companies use us as
          their platform to hire dream talent.
        </p>
      </div>

      {/* Company testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* MacDonalds */}
        <div className="border p-6 flex flex-col items-center justify-center rounded-lg shadow-md bg-white sm:py-20">
          <img
            src={macDonals}
            alt="MacDonalds"
            className="w-20 h-20 object-contain mb-6"
          />
          <p className="text-gray-500 text-sm sm:text-base text-center">
            "Indeed helps the world’s largest family restaurant business to
            recruit high quality candidates for its hard-to-fill positions."
          </p>
        </div>

        {/* Google */}
        <div className="border p-6 flex flex-col items-center justify-center rounded-lg shadow-md bg-white">
          <img
            src={google}
            alt="Google"
            className="w-20 h-20 object-contain mb-6"
          />
          <p className="text-gray-500 text-sm sm:text-base text-center">
            "This platform is redefining the way job seekers and employers
            connect—fast, efficient, and built for the future of work."
          </p>
        </div>

        {/* iPhone */}
        <div className="border p-6 flex flex-col items-center justify-center rounded-lg shadow-md bg-white">
          <img
            src={iphone}
            alt="iPhone"
            className="w-24 h-24 object-contain mb-6"
          />
          <p className="text-gray-500 text-sm sm:text-base text-center">
            "Seamlessly designed and incredibly intuitive—this job portal makes
            finding the right opportunity as smooth as using an iPhone."
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="mt-20 flex flex-col items-center text-center">
        <h1 className="font-bold text-3xl sm:text-4xl text-primary mb-5">
          Get started in minutes!
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 mb-2">
          <Link
            to="/all-jobs"
            className="px-4 py-2 text-white text-sm rounded bg-secondary hover:bg-[#5C93EE] transition"
          >
            Apply for Jobs
          </Link>
          <Link
            to="/log-in"
            className="px-4 py-2 text-sm text-black border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Post a Job
          </Link>
        </div>
        <span className="text-sm text-gray-400 mt-1">StevHire (worldwide)</span>
      </div>
    </div>
  );
};

export default Company;
