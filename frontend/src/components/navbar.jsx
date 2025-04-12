import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { HiOutlineUser, HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    logout();
    setIsDropDownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "My Jobs", href: "/all-jobs" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Form Page", href: "/form" },
    { name: "Settings", href: "/" },
    { name: "Help", href: "/" },
    { name: "Private Center", href: "/" },
  ];

  // useLoaction to make the home text to when the route is home
  const location = useLocation();
  return (
    <nav className="w-full z-40 md:z-0 shadow-sm fixed md:relative flex justify-between items-center border bg-[#FFFFFF] p-3">
      {/* <div className="max-w-7xl mx-auto flex items-center justify-between"></div> */}
      <div className="flex md:ml-3 gap-3 justify-center items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logoImg} alt="Logo" className="w-8 h-8  " />
        </Link>
        <h2 className="text-lg text-gray-500 font-semibold">StevHire</h2>
      </div>

      <div className="inline-flex items-center justify-center">
        <Link
          to="/all-jobs"
          className="text-base md:hidden ml-10 text-gray-500 hover:text-gray-400 underline underline-offset-4"
        >
          All Jobs
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="p-1">
        <ul className="hidden md:grid md:grid-cols-3 cursor-pointer text-center text-gray-500">
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
      {/* Right side || Icons and Auth */}
      <div className="hidden md:flex gap-2 justify-center items-center">
        <div>
          {user ? (
            <>
              <div className="flex justify-center items-center gap-5">
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <HiOutlineUser className="size-6 cursor-pointer hover:text-gray-500 relative top-1" />
                </button>
                <BiSolidMessageDetail className="size-6 cursor-pointer hover:text-gray-500 relative top-1" />
                <IoNotifications className="size-6 cursor-pointer hover:text-gray-500 relative top-1" />
                <Link
                  to="/dashboard"
                  className="hover:text-gray-400 text-gray-600 mt-1.5 border-l px-4"
                >
                  Employers/Post Job
                </Link>
              </div>

              {/* show dropdowns */}
              {isDropDownOpen && (
                <div className="absolute right-[140px] mt-4 w-48 bg-white shadow-lg rounded z-40">
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
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to="/log-in"
                className="px-2 py-1 mr-2 text-black bg-transparent border text-sm rounded"
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE]"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden p-4 space-y-4">
          {user ? (
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm hover:bg-gray-100 w-full inline-flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-2 ">
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-jobs"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/form" onClick={() => setIsMobileMenuOpen(false)}>
                    Form Page
                  </Link>
                </li>
              </ul>

              <hr className="p-1" />

              <Link
                to="/log-in"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2 py-1 text-black bg-transparent border text-sm rounded mr-2"
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE]"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
      {/* Hamburger Icon (mobile Only) */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
