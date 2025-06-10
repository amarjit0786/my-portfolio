import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Airbnb Clone",
    category: "Fullstack",
    description:
      "A full-featured Airbnb clone built using MERN stack. Users can sign up/login, create/edit property listings, browse others' listings, post reviews, and delete them.",
      github:"https://github.com/amarjit0786/prog-amar",
      live:"https://wanderlust-xi4o.onrender.com/",
    image: "/images/wanderlust.png",
    link: "https://github.com/amarjit0786/airbnb-clone",
    featured: true,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Zerodha Clone",
    category: "Fullstack",
    description: "A MERN stack-based stock trading platform inspired by Zerodha. Features include user signup/login, dashboard access, and simulated buy/sell functionality.",
    github: "https://github.com/amarjit0786/Zerodha-clone",
    live: "https://zerodha-clone-frontend-547a.onrender.com/",
    image: "/images/zerodha.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "MeetHub",
    category: "Fullstack",
    description:
      "A Zoom-inspired video conferencing app built with the MERN stack. Supports meeting creation, real-time video/audio, and participant management.",
    github: "https://github.com/amarjit0786/video-conferencing",
    live: "https://video-conferencing-frontend-ha2f.onrender.com/",
    image: "/images/meetHub.png",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    title: "Blog App",
    category: "React",
    description:
      "A full-featured blog platform with login, post creation, and filtering.",
    github: "https://github.com/amarjit0786/react-blog-app",
    live: "https://amarjit13.netlify.app/",
    image: "/images/blog.png",
    tech: ["React", "Firebase", "TailwindCSS"],
  },
];

const categories = ["All", "React", "Fullstack"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(2);
  const [modalData, setModalData] = useState(null);
  const { ref } = useInView({ triggerOnce: false });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const loadMore = () => setVisibleCount((prev) => prev + 2);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="flex gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(2);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={index}
              layout
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer"
              onClick={() => setModalData(project)}
            >
              {project.featured && (
                <span className="absolute top-0 left-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-br-lg">
                  Featured
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-800 dark:text-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-10" ref={ref}>
            <motion.button
              onClick={loadMore}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalData.image}
                alt={modalData.title}
                className="rounded mb-4 w-full object-cover h-48"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {modalData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {modalData.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={modalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  GitHub
                </a>
                <a
                  href={modalData.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
