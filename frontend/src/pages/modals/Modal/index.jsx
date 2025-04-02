import React from "react";
import Backdrop from "../Backdrop/backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const index = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="border px-6 py-6 w-96 h-64 rounded-sm shadow-sm modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default index;
