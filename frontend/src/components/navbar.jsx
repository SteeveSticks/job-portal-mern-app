import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { HiOutlineUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(true);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleSignOut = () => {
    "";
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Jobs", href: "/all-jobs" },
    { name: "Form Page", href: "/form" },
    { name: "Settings", href: "/" },
    { name: "Help", href: "/" },
    { name: "Private Center", href: "/" },
  ];

  // useLoaction to make the home text to when the route is home
  const location = useLocation();
  return (
    <div className="flex justify-between items-center border bg-[#FFFFFF] p-3">
      <div className="flex ml-3 gap-3 justify-center items-center">
        <Link to="/">
          <img src={logoImg} alt="" className="w-8 h-8  " />
        </Link>
        <h2 className="text-lg text-gray-500">StevHire</h2>
      </div>

      <div className="p-1">
        <ul className="grid grid-cols-3 cursor-pointer text-center text-gray-500">
          <Link
            to="/"
            className={`ml-3 font-bold text-1xl hover:text-gray-400 ${
              location.pathname === "/" ? "text-secondary" : "text-gray-500"
            }`}
          >
            HOME
          </Link>
          <Link
            to="/all-jobs"
            className="border-r border-l  w-40 hover:text-gray-400"
          >
            All Jobs
          </Link>
          <Link to="/dashboard" className="ml-3 hover:text-gray-400">
            Dashboard
          </Link>
        </ul>
      </div>

      {/* Right side */}
      <div className="flex gap-2 justify-center items-center">
        <div>
          {currentUser ? (
            <>
              <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                <HiOutlineUser className="size-6 cursor-pointer hover:text-gray-500 relative top-1" />
              </button>
              {/* show dropdowns */}
              {isDropDownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-40">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => setIsDropDownOpen(false)}
                      >
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="w-full inline-block text-left py-2 px-4 text-sm hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>

        <Link
          to="/log-in"
          className="px-2 py-1 text-black bg-transparent border text-sm rounded"
        >
          Log in
        </Link>
        <Link
          to="/sign-up"
          className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE]"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
