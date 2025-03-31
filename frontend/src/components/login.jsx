import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/google/googleCallback";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      alert("Login successful!💜");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  async function auth() {
    try {
      const response = await axios({
        method: "post",
        baseURL: "http://localhost:3000/api/auth/google-signin",
      });
      console.log(response.data);
      navigate(response.data.url);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  }

  return (
    <div>
      <div className="h-[calc(100vh-30px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-semibold mb-4">Please Login</h2>

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
                Login
              </button>
            </div>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm">
            Haven&lsquo;t an account? Please
            <Link
              to="/sign-up"
              className="text-blue-500 hover:text-blue-700 ml-1"
            >
              Sign up
            </Link>
          </p>

          {/* google sign in */}
          <div className="mt-4">
            <button
              onClick={auth}
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
  );
};

export default Login;
