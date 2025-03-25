import React from "react";
import bannerImg from "../../assets/home-1 (2).jpg";
import { Link } from "react-router-dom";

const banner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-3">
      <div className="relative top-20">
        <h1 className="text-primary text-lg mb-6">
          Find your dream job with ease! Our platform connects job seekers with
          top employers, making job searching, applications, and hiring seamless
          and efficient.
        </h1>

        <Link
          to="/sign-up"
          className="px-8 py-2 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] "
        >
          Sign up
        </Link>
      </div>

      <div className="w-full h-[80vh] bg-cover bg-center relative top-24">
        <img src={bannerImg} alt="bannerImage" className="rounded-sm" />
      </div>
    </div>
  );
};

export default banner;
