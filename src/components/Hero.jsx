import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex flex-col-reverse md:flex-row items-center justify-center px-6 pt-20 gap-10 overflow-hidden"
    >
      {/* 🌈 Gradient Blob */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 animate-pulse" />
      <div className="absolute top-40 -right-20 w-[400px] h-[300px] bg-pink-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 z-0 animate-ping" />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="text-indigo-600">
            <TypeAnimation
              sequence={[
                "Amarjit Singh",
                2000,
                "a Web Developer",
                2000,
                "a MERN Stack Dev",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 text-lg mb-6"
        >
          Passionate about creating beautiful and functional user experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition font-semibold"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="w-40 md:w-60 z-10"
      >
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full border-4 border-indigo-600 shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
