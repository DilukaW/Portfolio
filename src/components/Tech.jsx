import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className=" flex justify-center  ">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            My Technologies
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Languages, Tools & Frameworks.
          </h2>
        </motion.div>
      </div>
      <br />
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
