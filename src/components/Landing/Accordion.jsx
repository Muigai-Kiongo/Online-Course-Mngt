// // src/components/Accordion.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    question: "What is School of Code?",
    answer: "School of Code (SOC) is a coding bootcamp that teaches software development...",
  },
  {
    id: 2,
    question: "How do I enroll?",
    answer: "You can enroll by filling out the application form on our website...",
  },
  {
    id: 3,
    question: "What courses do you offer?",
    answer: "We offer courses in full-stack web development, React, Java, and more.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="max-w-xl mx-auto mt-12 space-y-4"
    >
        <div>
            <h1 className="font-bold">FAQ</h1>
        </div>
      {items.map(({ id, question, answer }) => (
        <div key={id} className="border rounded-md overflow-hidden">
          <button
            onClick={() => toggle(id)}
            className="w-full px-4 py-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-200 focus:outline-none"
          >
            <span className="font-medium text-black dark:text-white hover:text-yellow-400">{question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openId === id ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openId === id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-3 text-gray-700 bg-white"
            >
              {answer}
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
