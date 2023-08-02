import React from "react";
import { motion } from "framer-motion";

const SubmittedForm = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", stiffness: 50, duration: 6 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <div className="mx-16 ">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
        className="flex items-stretch justify-center w-full"
        >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#105DDB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-1/2 sm:w-1/4 lg:w-1/6 lucide lucide-badge-check"
          initial="hidden"
          animate="visible"
        >
          <motion.path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <motion.path variants={draw} d="m9 12 2 2 4-4" />
        </motion.svg>
      </motion.div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-lg font-semibold">Thank you for your valuable input!</h1>
      </div>
    </div>
  );
};

export default SubmittedForm;
