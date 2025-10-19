import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const inViewForm = useInView(formRef, { once: true, margin: "-50px" });
  const inViewInfo = useInView(infoRef, { once: true, margin: "-50px" });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Hero Section */}
      <motion.section
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewForm ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-12">
          Have questions or want to work with us? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="grid gap-6 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        ref={infoRef}
        initial={{ opacity: 0, y: 60 }}
        animate={inViewInfo ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> contact@myblog.com
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> +91 123 456 7890
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 123 Digital Street, Tech City, India
          </p>
        </div>

        {/* Map / Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174"
            alt="Map"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
