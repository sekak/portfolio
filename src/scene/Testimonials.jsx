import { motion } from "framer-motion";
import React from "react";
import LineGradient from "../components/LineGradient";

const Testimonials = () => {

  const testimonials = `mx-auto relative max-w-[400px] h-[350px] flex
    flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px]
    before:-ml-[110px] before:left-1/2`

  return (
    <section className="pt-32 pb-16" id="testimonials">
      <motion.div
        className="md:w-1/3 md:text-left text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          show: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-red font-playfair font-semibold text-4xl mb-5">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/5 mx-auto" />
        <p className="mt-9">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`${testimonials} before:content-person1 bg-red`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 , delay:0.2}}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            show: { scale: 1, opacity: 1 },
          }}
        >
          <p className="font-playfair text-6xl">""</p>
          <p className="text-center text-xl">A auctor pths mattis amed etims interdum paltea.</p>
        </motion.div> 
        <motion.div
        className={`${testimonials} before:content-person2 bg-blue`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 , delay:0.4}}
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          show: { scale: 1, opacity: 1 },
        }}
      >
        <p className="font-playfair text-6xl">""</p>
        <p className="text-center text-xl">A auctor pths mattis amed etims interdum paltea.</p>
      </motion.div>
      <motion.div
      className={`${testimonials} before:content-person3 bg-yellow`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 , delay:0.6}}
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        show: { scale: 1, opacity: 1 },
      }}
    >
      <p className="font-playfair text-6xl">""</p>
      <p className="text-center text-xl">A auctor pths mattis amed etims interdum paltea.</p>
    </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
