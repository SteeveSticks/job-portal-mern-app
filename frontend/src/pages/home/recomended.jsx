import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Recomended = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start invisible and lower
          whileInView={{ opacity: 1, y: 0 }} // fade in and move up
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex py-36 px-24 gap-4"
        >
          <motion.div className="border px-6 py-6 w-96 h-64 rounded-sm shadow-sm">
            <span className="text-secondary text-xl font-bold">1</span>

            <h1 className="font-bold text-primary text-2xl mt-5 mb-5">
              Create your <br />
              free account
            </h1>
            <p className="text-gray-600">
              All you need is your email address to create an account and start
              applying for job post.
            </p>
          </motion.div>

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
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Recomended;
