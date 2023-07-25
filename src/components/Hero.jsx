import { motion } from "framer-motion";

import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0d6efd]" />
          <div className="w-1 sm:h-80 h-50 bg-[#0d6efd]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#0d6efd] ">Diluka</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A dynamic developer specializing in <br></br>Web, Mobile Apps, and
            AI. <br /> With seamless designs and powerful <br />
            AI solutions, I create experiences that <br />
            redefine the future. Let's collaborate <br />
            and turn your vision into an innovation <br /> that leaves a lasting
            impact.
          </p>
        </div>
        <div className="ml-[60px] ">
          <img
            src="./assets/Photograph.jpeg"
            alt="logo"
            className="hidden md:block w-full object-contain md:-mt-[100px] lg:-mt-[0px] "
            style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
          />
        </div>{" "}
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
