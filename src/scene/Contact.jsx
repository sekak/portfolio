import { motion } from "framer-motion";
import React from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";

const Contact = () => {
    const {register, trigger, formState:{errors}, watch} = useForm();
    const onSubmit = async (e) => {
       const isValid = await trigger();
      //when work this transfer to FormSubmit 
      //dont, its error so handle error and work this element
      if (!isValid) {
        e.preventDefault();
      }
     }
   return (
    <section className="flex flex-col contact py-48" id="contact">
      <motion.div
        className="md:text-right text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          show: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-red text-4xl font-playfair font-semibold">
          CONTACT ME <span className="text-white">TO GET STARTED</span>
        </p>
        <div className="flex md:justify-end justify-center mt-4">
          <LineGradient width="w-2/5 z-[-1]" />
        </div>
      </motion.div>
      <div className="md:flex md:justify-between gap-8 mt-20">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contact-image" />
        </motion.div>
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0 },
          }}
        >
          <form
             className="md:mt-0 mt-8"
             target="_blank" 
             onSubmit={onSubmit}
              action="https://formsubmit.co/c356cf5b39e1ceb7fe58de8018fbbd91" 
              method="POST"
             >
             <input
              className="p-3 w-full text-sm placeholder:text-white bg-blue text-white"
              placeholder="NAME"
              name="name"
              type="text"
              {...register("name", {required:true})}
             />
             {errors.name && <span className="text-sm text-red mt-2">This field is required.</span>}
            
            <input
              className="p-3 w-full text-sm placeholder:text-white bg-blue text-white mt-5"
              placeholder="EMAIL"
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
             {errors.email && <span className="text-sm text-red mt-2">This field is required.</span>}
            <textarea
              className="p-3 w-full text-sm placeholder:text-white bg-blue text-white mt-5"
              placeholder="DESC"
              name="texterea"
              {...register("desc")}
            />
            <button
              type="submit"
               className="bg-yellow text-black p-4 mt-8 hover:bg-white transition duration-500 hover:text-black"
            >SEND ME A MESSAGE</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
