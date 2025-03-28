import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
                {...register("email", { required: true })}
                type="text"
                name="email"
                id="email"
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
              <p className="text-red-500 text-xs italic mb-3 ">
                Please provide a vaid emailand password
              </p>
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
