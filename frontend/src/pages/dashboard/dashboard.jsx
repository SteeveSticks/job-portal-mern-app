import React from "react";
import { RiGroupLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { MonthlyTarget } from "./MontlyTargetChart";
import { MdOutlinePendingActions } from "react-icons/md";
import MonthlySalesChart from "./montlySalesChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-auto gap-4 md:gap-6">
      {/* Metric item start */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <RiGroupLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Applicant's
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-[32px] dark:text-white/90">
              3,782
            </h4>
          </div>

          <span className="flex justify-end items-center gap-1 rounded-xl bg-[#ecfdf3] text-[#039855] dark:bg-[#ecfdf3]/10 dark:text-[#12b76a] py-1 px-2">
            <FaArrowUp className="h-4 w-4 text-sm" />
            <h4 className="font-semibold text-sm">11.01%</h4>
          </span>
        </div>
      </div>
      {/* Metric Item End */}

      {/* Metric Item start */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <RiComputerLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Jobs
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-[32px] dark:text-white/90">
              50
            </h4>
          </div>

          <span className="flex justify-end items-center gap-1 rounded-xl bg-[#fef3f2] text-[#d92d20] dark:bg-[#fef3f2]/10 dark:text-[#f04438] py-1 px-2">
            <FaArrowDown className="h-4 w-4 text-sm" />
            <h4 className="font-semibold text-sm">5.08%</h4>
          </span>
        </div>
      </div>
      {/* Metric Item End */}

      {/* Metric Item Start */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <MdOutlinePendingActions className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Pending Jobs
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-[32px] dark:text-white/90">
              20
            </h4>
          </div>

          <span className="flex justify-end items-center gap-1 rounded-xl bg-yellow-100 text-yellow-500 dark:bg-[#ecfdf3]/10 dark:text-yello py-1 px-2">
            <h4 className="font-semibold text-sm ">Pending</h4>
          </span>
        </div>
      </div>
      {/* Montly Item Ends */}

      {/* Montly Target Chart */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        <MonthlyTarget />
      </div>

      {/* Montly Sales Chart */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-2">
        <MonthlySalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
