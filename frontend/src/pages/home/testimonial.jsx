import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import workerImg from "../../assets/home-2.jpg";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4 sm:p-8 bg-gray-50 mb-11 gap-10">
      {/* Left side text */}
      <div className="w-full lg:w-1/2 px-4 sm:px-8">
        <FaQuoteLeft className="text-secondary text-2xl mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-6"
        >
          "I've used other websites in the past for hiring; nothing has ever
          been this easy, this simple, and this effective."
        </motion.h1>
        <h3 className="text-base sm:text-lg text-gray-700">
          Emmanuel Ikwuegbu
        </h3>
      </div>

      {/* Right side image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={workerImg}
          alt="workerImg"
          className="w-full sm:w-[70%] h-[300px] sm:h-[100%] object-cover rounded-sm shadow-sm hover:shadow-md transition duration-300 relative top-10"
        />
      </div>
    </div>
  );
};

export default Testimonial;
