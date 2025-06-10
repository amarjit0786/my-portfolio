import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import profileImg from "../assets/profile.png";
import resumePDF from "../assets/Amarjit-Resume.pdf";

const timelineData = [
  {
    icon: <FaGraduationCap />,
    title: "BCA Graduate + Pursuing M.Sc. IT",
    time: "2019 - Present",
    description:
      "Completed BCA with 70% and currently pursuing M.Sc. IT at Guru Nanak Khalsa College, Sultanpur Lodhi. Also scored 81% in ITI (Computer Operator & Programming Assistant).",
  },
  {
    icon: <FaCode />,
    title: "MERN Stack Development",
    time: "2022 - Present",
    description:
      "Proficient in frontend and backend web development using React, Node.js, Express, MongoDB, Bootstrap, Tailwind, and REST APIs. Certified by Apna College in MERN Stack Web Development.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Projects & Practical Experience",
    time: "2023 - Present",
    description:
      "Built and deployed full-stack projects like an Airbnb Clone, a Zoom-like video conferencing app (MeetHub), and a perfume e-commerce site. Experience also includes domain + hosting setup (GoDaddy & Hostinger).",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 🧑‍💻 Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Amarjit Singh"
            className="rounded-2xl w-64 h-64 object-cover border-4 border-indigo-500 shadow-lg"
          />
        </motion.div>

        {/* 📝 Right: Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300 text-lg leading-7 mb-6"
          >
            Hello! I’m{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Amarjit Singh
            </span>
            , a passionate MERN Stack Developer from Punjab. I love building
            full-stack web apps and turning ideas into real-world solutions. My
            strengths lie in problem-solving, design thinking, and clean code.
          </motion.p>

          {/* 🔧 Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-4 text-3xl text-indigo-600 dark:text-indigo-400 mb-6"
          >
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiJavascript title="JavaScript" />
            <SiReact title="React.js" />
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express.js" />
            <SiMongodb title="MongoDB" />
            <SiTailwindcss title="Tailwind CSS" />
          </motion.div>

          {/* 📄 Resume Button */}
          <motion.a
            href={resumePDF}
            download="Amarjit-Singh-Resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* 📅 Timeline Section */}
      <div className="mt-20">
        <div className="relative pl-6 border-l-2 border-indigo-500 dark:border-indigo-400 space-y-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group flex items-start space-x-4 relative"
            >
              <span className="absolute -left-[10px] w-5 h-5 bg-indigo-500 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900"></span>
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.time}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
