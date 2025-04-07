import {} from "react";
import { Link, Outlet } from "react-router-dom";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const DashBoardLayout = () => {
  const handleLogout = () => {};

  return (
    <div>
      <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
        {/* the tag aside is used for sidebars */}
        <aside className="hidden sm:flex sm:flex-col shadow-sm border-b border-r border-l">
          <a
            href="/"
            className="inline-flex items-center justify-center h-16 w-full bg-white dark:border-gray-800 dark:bg-gray-900 px-4 pr-20 py-10"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="object-contain w-full h-10 "
            />
            <h2 className="text-2xl font-medium text-gray-700 ml-3 ">
              JobAdmin
            </h2>
          </a>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-white">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Folders</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </a>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
              >
                <span className="sr-only">Dashboard</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </Link>
              <Link
                to="/dashboard/add-new-book"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Add Book</span>
                <HiViewGridAdd className="h-6 w-6" />
              </Link>
              <Link
                to="/dashboard/manage-books"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg "
              >
                <span className="sr-only">Documents</span>
                <MdOutlineManageHistory className="h-6 w-6" />
              </Link>
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
              <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Settings</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <div className="flex-grow">
          {/* Navbar area  */}
          <header className="sticky top-0 flex  w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b justify-center items-center ">
            <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
              <span className="sr-only">Menu</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>

            {/* left side navbar */}
            <div className="px-10 w-full max-w-md sm:-ml-2">
              <svg
                width="20"
                height="20"
                viewBox="-4 -3 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400 fill-gray-500 dark:fill-gray-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                  fill=""
                />
              </svg>
              <input
                type="text"
                role="search"
                placeholder="Search or type command..."
                className="dark:bg-dark-900 h-11 py-2.5 pl-10 pr-14 text-sm w-full bg-transparent border-4 border-transparent placeholder:font-semibold placeholder-gray-400 rounded-lg shadow-md outline-none focus:shadow-[0_0_4px_#3b82f6] focus:outline-hidden focus:ring-1 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
              />
              <a
                href="/dashboard"
                className="absolute left-[37%] top-[25%] inline-flex items-center gap-0.5 rounded-lg border-2 bg-gray-50 px-[9px] py-[3px] text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
              >
                <span> ⌘ </span>
                <span> K </span>
              </a>
            </div>

            {/* right side navbar */}
            <div className="flex flex-shrink-0 items-center ml-auto"></div>
          </header>
          <main className="p-6 sm:p-10 space-y-6 ">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                <h2 className="text-gray-600 ml-0.5">Book Store Inventory</h2>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                <Link
                  to="/dashboard/manage-books"
                  className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Manage Jobs
                </Link>
                <Link
                  to="/dashboard/add-new-book"
                  className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add New Job
                </Link>
              </div>
            </div>
            <Outlet />
          </main>
        </div>
      </section>
    </div>
  );
};

export default DashBoardLayout;
