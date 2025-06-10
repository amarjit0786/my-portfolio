import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-12"
        >
          I'm Amarjit Singh — a MERN Stack Developer passionate about building real-world applications with React, Node.js, and MongoDB. Whether it's collaborating on exciting projects or answering tech questions, feel free to reach out!
        </motion.p>

        {/* Contact Form with EmailJS */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="md:col-span-2 p-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="md:col-span-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="mailto:amarjitsinghbca@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/amarjit0786"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amarjit-singh-a8ab03298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
