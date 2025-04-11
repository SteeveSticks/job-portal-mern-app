import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import getBaseURL from "../utils/getBaseURL";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(`${getBaseURL()}/api/employer/login`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data),
      });

      const auth = await response.json();

      if (!response.ok) {
        throw new Error(auth.message || "Login failed");
      }

      console.log("Auth response :", auth);

      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has expired! Please Login again.");
          navigate("/");
        }, 3600 * 1000); // after 1hr this token will expire

        alert("Admin Login successfull!");
        navigate("/dashboard");
      } else {
        throw new Error("Token not found");
      }
    } catch (error) {
      setMessage("Please provide a vaid username and password");
      console.log("Failed to login admin :", error);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="h-[calc(100vh-30px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">
            Employer Dashboard Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 "
                htmlFor="email"
              >
                Username
              </label>
              <input
                {...register("username", { required: true })}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
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
              <p className="text-red-500 text-xs italic mb-3 ">{message}</p>
            )}

            <div>
              <button className="px-7 py-1 text-white outline-none text-base font-bold rounded bg-secondary hover:bg-[#5C93EE] w-full">
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            @2025 Job portal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
