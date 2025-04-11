import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Recomended = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {/* Card 1 */}
          <motion.div className="border px-6 py-6 w-full sm:w-96 h-64 rounded-sm shadow-sm bg-white transform transition duration-300 hover:scale-105">
            <span className="text-secondary text-xl font-bold">1</span>
            <h1 className="font-bold text-primary text-lg sm:text-2xl mt-4 mb-5">
              Create your <br />
              free account
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              All you need is your email address to create an account and start
              applying for job posts.
            </p>
          </motion.div>

          {/* Card 2 */}
          <div className="border px-6 py-6 w-full sm:w-96 h-64 rounded-sm shadow-sm bg-white transform transition duration-300 hover:scale-105">
            <span className="text-secondary text-xl font-bold">2</span>
            <h1 className="font-bold text-primary text-lg sm:text-2xl mt-4 mb-5">
              For employers, build your <br />
              job post
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Then just add a title, description, and location to your job post,
              and you're ready to go.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border px-6 py-6 w-full sm:w-96 h-64 rounded-sm shadow-sm bg-white transform transition duration-300 hover:scale-105">
            <span className="text-secondary text-xl font-bold">3</span>
            <h1 className="font-bold text-primary text-lg sm:text-2xl mt-4 mb-5">
              Post <br />
              your job
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              After you post your job, use our state-of-the-art tools to help
              you find dream talent.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Recomended;
