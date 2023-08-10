import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { useEffect } from "react";

const Myskills = ({selectPage, setSelectePage}) => {

 

  const Media = useMediaQuery("(min-width:1060px)");
  return (
    <section className="pt-10 pb-24" id="skills">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.4}}
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair mb-3 font-semibold">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="font-opensans mt-10 mb-12">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>
        {Media ? (
            <div
            className="mt-0 md:mt-20 relative z-0 ml-20 before:absolute before:z-[-1] 
            before:top-[-10%] before:left-[-10%] before:border before:border-blue before:w-full before:h-full"
            >
            <img
            className="z-10"
            src="../assets/skills-image.png"
            alt="img-skills"
            />
            </div>
            ) : (
                <img className="" src="../assets/skills-image.png" alt="img-skills" />
                )}
        </div>
      {/* expirience */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl">Experience</p>
            </div>
            <div className="absolute h-full md:w-3/4 w-1/2 bg-blue right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>
       {/* Innovative */}
         <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl">Innovative</p>
            </div>
            <div className="absolute h-full md:w-3/4 w-1/2 bg-red right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>
       {/* Imaginative */}
         <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl">
                Imaginative
              </p>
            </div>
            <div className="absolute h-full md:w-3/4 w-1/2 bg-yellow right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-10">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Myskills;
