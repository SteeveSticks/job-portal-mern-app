import React from "react";

const recomended = () => {
  return (
    <>
      <div className="flex py-36 px-24 gap-4">
        <div className="border px-6 py-6 w-96 h-64 rounded-sm shadow-sm">
          <span className="text-secondary text-xl font-bold">1</span>

          <h1 className="font-bold text-primary text-2xl mt-5 mb-5">
            Create your <br />
            free account
          </h1>
          <p className="text-gray-600">
            All you need is your email address to create an account and start
            applying for job post.
          </p>
        </div>

        <div className="border px-6 py-6 w-96 h-64 rounded-sm shadow-sm">
          <span className="text-secondary text-xl font-bold">2</span>

          <h1 className="font-bold text-primary text-2xl mt-5 mb-5">
            For employers build your <br />
            job post
          </h1>
          <p className="text-gray-600">
            Then just add a title, description, and location to your job post,
            and you're ready to go.
          </p>
        </div>

        <div className="border px-6 py-6 w-96 h-64 rounded-sm shadow-sm">
          <span className="text-secondary text-xl font-bold">3</span>

          <h1 className="font-bold text-primary text-2xl mt-5 mb-5">
            Post <br />
            your job
          </h1>
          <p className="text-gray-600">
            After you post your job use our state of the art tools to help you
            find dream talent.
          </p>
        </div>
      </div>
    </>
  );
};

export default recomended;
