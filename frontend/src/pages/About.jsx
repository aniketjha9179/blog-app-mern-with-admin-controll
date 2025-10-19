import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: "-50px" });
  const inView2 = useInView(ref2, { once: true, margin: "-50px" });
  const inView3 = useInView(ref3, { once: true, margin: "-50px" });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Hero / Intro Section */}
      <motion.section
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0, color: "#2563eb" } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Welcome to{" "}
          <span className="font-semibold text-indigo-600">MyBlog</span> — where
          creativity meets technology. We are a passionate team of developers,
          designers, and storytellers focused on building impactful digital
          experiences. From blogs to full-fledged web solutions, we craft
          content and code that inspire, inform, and innovate.
        </p>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        ref={ref2}
        initial={{ opacity: 0, y: 60 }}
        animate={inView2 ? { opacity: 1, y: 0, color: "#2563eb" } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-600">
            At MyBlog, our mission is to simplify the digital world for everyone.
            We work on various projects ranging from modern web development,
            UI/UX design, SEO optimization, and content creation that connects
            brands with people.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Whether it’s a startup aiming to build its identity or an enterprise
            enhancing its online presence — we deliver solutions that are
            functional, elegant, and scalable. Innovation and integrity are at
            the core of everything we do.
          </p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60"
          alt="Team collaboration"
          className="rounded-2xl shadow-lg"
        />
      </motion.section>
      <motion.section
        ref={ref2}
        initial={{ opacity: 0, y: 60 }}
        animate={inView2 ? { opacity: 1, y: 0, color: "#2563eb" } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-12 items-center"
      >

 <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Team collaboration"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-600">
            At MyBlog, our mission is to simplify the digital world for everyone.
            We work on various projects ranging from modern web development,
            UI/UX design, SEO optimization, and content creation that connects
            brands with people.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Whether it’s a startup aiming to build its identity or an enterprise
            enhancing its online presence — we deliver solutions that are
            functional, elegant, and scalable. Innovation and integrity are at
            the core of everything we do.
          </p>
        </div>


         <div>
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-600">
            At MyBlog, our mission is to simplify the digital world for everyone.
            We work on various projects ranging from modern web development,
            UI/UX design, SEO optimization, and content creation that connects
            brands with people.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Whether it’s a startup aiming to build its identity or an enterprise
            enhancing its online presence — we deliver solutions that are
            functional, elegant, and scalable. Innovation and integrity are at
            the core of everything we do.
          </p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Team collaboration"
          className="rounded-2xl shadow-lg"
        />

        
      </motion.section>

      {/* Our Projects / Market Impact */}
      <motion.section
        ref={ref3}
        initial={{ opacity: 0, y: 80 }}
        animate={inView3 ? { opacity: 1, y: 0, color: "#2563eb" } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto mt-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Our Projects & Market Impact</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-gray-600">
          Over the years, we’ve successfully delivered multiple projects that
          have made a real impact in the digital space — from eCommerce platforms
          and news portals to AI-driven content systems. Our solutions are used
          by thousands of users daily and trusted by businesses across industries.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
    title: "Web Development",
    desc: "Scalable and high-performance web apps tailored to your business using React, Next.js, and Node.js.",
  },
  {
    title: "Digital Marketing",
    desc: "Helping brands grow their reach through SEO, data-driven marketing, and creative storytelling.",
  },
  {
    title: "Design & Branding",
    desc: "Creating visually stunning designs and brand identities that align with your company’s values.",
  },
  {
    title: "Mobile App Development",
    desc: "Building sleek, high-performance mobile apps with React Native and Flutter that deliver seamless user experiences across devices.",
  },
  {
    title: "AI & Automation Solutions",
    desc: "Leveraging artificial intelligence and automation tools to streamline workflows, analyze data, and enhance decision-making for businesses.",
  },
  {
    title: "Cloud & DevOps Services",
    desc: "Deploying scalable, secure cloud infrastructure and CI/CD pipelines on AWS, Azure, and Google Cloud for optimal performance.",
  },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
