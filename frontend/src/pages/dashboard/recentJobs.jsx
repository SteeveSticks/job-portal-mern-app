import { Table, TableBody, TableCell, TableHeader, TableRow } from "./table";
import product1 from "../../assets/products/product-01.jpg";
import product2 from "../../assets/products/product-02.jpg";
import product3 from "../../assets/products/product-03.jpg";
import product4 from "../../assets/products/product-04.jpg";
import product5 from "../../assets/products/product-05.jpg";
import Badge from "./badge";

// Define the table data using the interface
const tableData = [
  {
    id: 1,
    name: "Software Engineer",
    category: "Company A",
    price: "$50,000",
    status: "Delivered",
    image: [product1], // Replace with actual image URL
  },
  {
    id: 2,
    name: "Product Manager",
    category: "Company B",
    price: "$70,000",
    status: "Pending",
    image: [product2], // Replace with actual image URL
  },
  {
    id: 3,
    name: "Data Scientist",
    category: "Creative Studio",
    price: "$85,000",
    status: "Delivered",
    image: [product3],
  },
  {
    id: 4,
    name: "Frontend Developer",
    category: "FinTech Co.",
    price: "$110,000",
    status: "Canceled",
    image: [product4],
  },
  {
    id: 5,
    name: " Backend Developer",
    category: "Retail Enterprise",
    price: "$120,000",
    status: "Delivered",
    image: [product5],
  },
];

export function RecentJobs() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
            Recent Jobs
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 shadow-sm">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 shadow-sm">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-sm text-theme-xs dark:text-gray-400 pl-2"
              >
                Job
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-sm text-theme-xs dark:text-gray-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-sm pl-2 text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 pl-2"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((product) => (
              <TableRow key={product.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        className="h-[50px] w-[50px]"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm text-sm dark:text-white/90">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-3 text-gray-500 text-theme-sm text-sm dark:text-gray-400 pr-2">
                  {product.category}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm text-sm dark:text-gray-400">
                  {product.price}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <div
                    className={
                      product.status === "Delivered"
                        ? "rounded-xl bg-[#ecfdf3] text-[#039855] dark:bg-[#ecfdf3]/10 dark:text-[#12b76a] py-1 px-2"
                        : product.status === "Pending"
                        ? "rounded-xl bg-yellow-100 text-yellow-500 dark:bg-[#ecfdf3]/10 dark:text-yellow py-1 px-2"
                        : product.status === "Warning"
                        ? "rounded-xl bg-[#fef3f2] text-[#d92d20] dark:bg-[#fef3f2]/10 dark:text-[#f04438] py-1 px-2"
                        : "rounded-xl bg-[#fef3f2] text-[#d92d20] dark:bg-[#fef3f2]/10 dark:text-[#f04438] py-1 px-2" // Default for error or unknown status
                    }
                  >
                    <span className="text-sm ">{product.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
