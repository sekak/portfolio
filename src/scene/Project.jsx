import { motion } from "framer-motion";
import React, { useEffect } from "react";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const PorjectChild = ({ title }) => {
  const getName = title.split(" ").join("-").toLowerCase();
  return (
    <div className="relative">
      <div
        className="text-black absolute flex flex-col items-center justify-center text-center
      transition duration-500 hover:opacity-90 opacity-0 bg-grey text-blue h-full w-full"
      >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${getName}.jpeg`} alt="" />
    </div>
  );
};

const Project = ({ selectePage, setSelectePage }) => {
  useEffect(() => {
    const change = () => {
      if (window.scrollY > 2000) setSelectePage("skills");
    };
    window.addEventListener("scroll", change);
    return () => window.removeEventListener("scroll", change);
  }, []);
  return (
    <section id="project" className="mt-20 mb-20">
      <motion.div
        className="text-center mx-auto md:w-2/4"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5, delay: 0.2, once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          show: { opacity: 1, y: 0 },
        }}
      >
        <p className="text-4xl   font-semibold font-playfair mb-4">
          PRO
          <span className="text-red text-4xl font-semibold font-playfair">
            JECTS
          </span>
        </p>
        <LineGradient />
        <p className="mt-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>
      <div className="flex justify-center mt-16">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center items-center text-center p-10 text-2xl font-semibold font-playfair bg-red max-w-[500px] max-h-[500px]">
            test
          </div>
          <PorjectChild title="Project 1" />
          <PorjectChild title="Project 2" />
          <PorjectChild title="Project 3" />
          <PorjectChild title="Project 4" />
          <PorjectChild title="Project 5" />
          <PorjectChild title="Project 6" />
          <PorjectChild title="Project 7" />
          <div className="flex justify-center items-center text-center p-10 text-2xl font-semibold font-playfair bg-blue max-w-[500px] max-h-[500px]">
            test
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
