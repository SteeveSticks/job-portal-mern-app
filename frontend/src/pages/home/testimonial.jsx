import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import workerImg from "../../assets/home-2.jpg";

const testimonial = () => {
  return (
    <div className="flex justify-center items-center p-2 bg-gray-50 mb-11">
      <div className="pl-36">
        <FaQuoteLeft className="text-secondary mb-5" />
        <h1 className="font-bold text-3xl text-primary mb-9">
          I've used other websites in the past for hiring; nothing has ever been
          this easy, this simple, and this effective."
        </h1>
        <h3 className="text-lg ">Emmanuel Ikwuegbu</h3>
      </div>

      <div className="w-full h-[80vh] bg-cover bg-center relative top-24">
        <img
          src={workerImg}
          alt="workerImg"
          className="w-[70%] h-[100%] object-cover overflow-hidden relative bottom-14 rounded-sm"
        />
      </div>
    </div>
  );
};

export default testimonial;
