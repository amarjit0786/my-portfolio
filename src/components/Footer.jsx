import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 pt-8 pb-4 border-t border-gray-200 dark:border-gray-700 relative"
    >
      <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-center md:text-left">
        {/* Section 1: Brand & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <h1 className="text-xl font-bold text-indigo-600 dark:text-yellow-400">
            💻 Amarjit Singh
          </h1>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://github.com/amarjit0786"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-yellow-400 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/amarjit-singh-a8ab03298/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-yellow-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:amarjitsinghbca@gmail.com"
              className="hover:text-indigo-600 dark:hover:text-yellow-400 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
           
            <a
              href="https://www.instagram.com/coding._.here?igsh=MmF5dXk1NXR2eTQw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-yellow-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>

        {/* Section 2: Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm italic"
        >
          "Web development is my canvas, and every line of code is a brushstroke." <br />– Amarjit Singh
        </motion.div>

        {/* Section 3: Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm">⚙️ Built with:</p>
          <p className="text-indigo-600 dark:text-yellow-400 font-medium text-sm">
            React, Tailwind CSS, Vite, Framer Motion, Netlify
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-yellow-400 dark:text-black p-3 rounded-full shadow-lg transition transform hover:scale-110 z-50"
          aria-label="Scroll to Top"
        >
          ⬆️
        </motion.button>
      )}

      {/* Copyright */}
      <div className="text-center text-xs mt-6 text-gray-500 dark:text-gray-400">
        {/* <MusicPlayer /> */}
        &copy; {new Date().getFullYear()} Amarjit Singh. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
