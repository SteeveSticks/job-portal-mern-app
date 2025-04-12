import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";

const SignUp = () => {
  const [message, setMessage] = useState();
  const { register, handleSubmit } = useForm();
  const { registerUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      toast.success("User registered successfully 💜!");
    } catch (error) {
      toast.error("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = () => {}; // No Google SignIn because betterAuth only works with #ts# typescript!
  return (
    <div>
      <div>
        <div className="h-[calc(100vh)] flex justify-center items-center">
          <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-semibold mb-4">Please Sign up</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                />
              </div>

              {message && (
                <p className="text-red-500 text-xs italic mb-3 ">
                  Please provide a vaid email and password
                </p>
              )}

              <div>
                <button className="px-7 py-1 text-white outline-none text-sm rounded bg-secondary hover:bg-[#5C93EE]">
                  Sign up
                </button>
              </div>
            </form>
            <p className="align-baseline font-medium mt-4 text-sm">
              Have an account? Please
              <Link
                to="/log-in"
                className="text-blue-500 hover:text-blue-700 ml-1"
              >
                Login
              </Link>
            </p>

            {/* google sign in */}
            <div className="mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex flex-wrap gap-0 items-center justify-center text-white outline-none text-sm  bg-secondary hover:bg-[#5C93EE] py-2 px-4 rounded focus:outline-none "
              >
                <FaGoogle className="mr-2" />
                Sign in with Goggle
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-500">
              @2025 Job portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
