import React from "react";
import bannerImg from "../../assets/home-1 (2).jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const banner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen p-3">
      <div className="relative sm:top-20 w-full sm:w-1/2 order-2 sm:order-1 text-center sm:text-left">
        <h1 className="text-primary text-sm sm:text-lg mb-4 sm:mb-6 px-4 sm:px-0 mt-2 sm:mt-0">
          Find your dream job with ease! Our platform connects job seekers with
          top employers, making job searching, applications, and hiring seamless
          and efficient. The platform aims to make finding a job easier and
          faster for individuals, likely by using algorithms, search filters,
          and personalized recommendations.
        </h1>

        {/* Using 'motion.div' because motion can-not work with Link(react-router-dom) */}
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 0.98 }}>
          <Link
            to="/sign-up"
            className="px-6 py-2 text-white outline-none text-xs sm:text-sm rounded bg-secondary hover:bg-[#5C93EE] border"
          >
            Sign up !
          </Link>
        </motion.div>
      </div>

      <div className="w-full sm:w-1/2 h-60 sm:h-[80vh] bg-cover bg-center relative order-1 sm:order-2">
        <img
          src={bannerImg}
          alt="bannerImage"
          className="rounded-sm object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default banner;
