import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import JobPage from "./jobPage";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  //Handle input change
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-4xl font-bold text-primary mb-3">
        Find your <span className="text-secondary">new job </span> today
      </h1>
      <p className="text-lg text-primary/70 mb-8">
        Discover thousands of exciting opportunities in tech, engineering, and
        more—your dream job waiting for you.
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md md:rounded-e-sm rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset  md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={search}
              placeholder="What position are you looking for ?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <div className="flex md:rounded-s-none md:rounded-e-sm  rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset  md:w-1/3 w-full ">
            <input
              type="text"
              name="title"
              onChange={handleLocationChange}
              value={location}
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="px-6 py-0 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE] md:rounded-s-none"
          >
            Search
          </button>
        </div>
      </form>

      {/* Pass search page to job page */}
      <JobPage search={search} location={location} />
    </div>
  );
};

export default AllJobs;
