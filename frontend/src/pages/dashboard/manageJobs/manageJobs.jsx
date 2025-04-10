import { data, Link, useNavigate, useParams } from "react-router-dom";
import getBaseURL from "../../../utils/getBaseURL";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);

  const data = jobs;

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await fetch(`${getBaseURL()}/api/jobs/`, {
          method: "GET",
        });

        console.log(response);

        const data = await response.json();

        console.log(data);

        if (!response.ok)
          throw new Error(data.message || "Failed to fetch jobs");

        setJobs(data.jobs);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all jobs :", error);
        console.error(error);
      }
    };
    fetchAllJobs();
  }, []);

  // const [deleteBook] = useDeleteBookMutation();

  const handleDeleteJob = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${getBaseURL()}/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      const deleteData = await response.json();

      if (!response.ok)
        throw new Error(deleteData.message || "Failed to delete job ");

      console.log(deleteData);

      toast.success("Job deleted succesfully");

      // Update the UI : Update the frontend without needing to refetch all the jobs
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.log("Failed to delete a job :", error);
      console.error(error);
      toast.error("Failed to delete job!");
    }
  };

  // Handle deleting a book
  // const handleDeleteBook = async (id) => {
  //   try {
  //     await deleteBook(id).unwrap();
  //     alert("Book deleted successfully!");
  //     refetch();
  //   } catch (error) {
  //     console.error("Failed to delete book:", error.message);
  //     alert("Failed to delete book. Please try again.");
  //   }
  // };

  // Handle navigating to Edit Book page
  const handleEditClick = (id) => {
    navigate(`dashboard/edit-book/${id}`);
  };
  return (
    <section className="py-1 bg-blueGray-50 ">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded dark:bg-gray-800 dark:text-white dark:border-gray-600">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  All Books
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto dark:bg-gray-800 dark:text-white dark:border-gray-600">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    #
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Job Title
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Company Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Price
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {jobs &&
                  jobs.map((data, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {index + 1}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {data.jobTitle}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {data.companyName}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        ${data.maxPrice}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">
                        <Link
                          to={`/dashboard/edit-job/${data._id}`}
                          className="font-medium text-indigo-600 hover:text-indigo-700 mr-2 hover:underline underline-offset-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteJob(data._id)}
                          className=" gap-1 rounded-xl bg-[#fef3f2] text-[#d92d20] dark:bg-[#fef3f2]/10 dark:text-[#f04438] py-1 px-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageJobs;
