import React from "react";
import img1 from "@/images/Workflow1.png"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function HeroSection() {
  const navigate = useNavigate();

  const handlePreAccess = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/pre-access");
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, type: "spring" }
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Section */}
      <motion.div
        className="flex flex-col md:flex-row flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left Side: Text Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center px-8 md:px-24 py-20"
          variants={fadeUp}
          custom={0}
        >
          <motion.span
            className="text-purple-700 text-2xl font-medium mb-4"
            variants={fadeUp}
            custom={0.1}
          >
            Company
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-gray-900"
            variants={fadeUp}
            custom={0.2}
          >
            The leader in<br />hiring software
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-10 max-w-xl"
            variants={fadeUp}
            custom={0.3}
          >
            Greenhouse has led in hiring innovation for 10+ years. Our AI-powered platform empowers teams to make smarter, faster decisions and consistently hire top talent, transforming recruiting into a strategic engine for growth.
          </motion.p>
          <motion.div
            className="flex gap-6"
            variants={fadeUp}
            custom={0.4}
          >
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Read our mission
            </button>
            <a
              href="#"
              className="text-blue-700 underline underline-offset-2 font-medium flex items-center"
            >
              Request a demo
            </a>
          </motion.div>
        </motion.div>
        {/* Right Side: Image */}
        <motion.div
          className="flex-1 flex items-center justify-center bg-gray-50 relative min-h-[500px]"
          variants={fadeUp}
          custom={0.5}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.prod.website-files.com/6668a687e71e2722fccb8357/67116e8a2405cb79774059f2_Woman-wearing-white-suit-in-warm-toned-office-and-Greenhouse-Onboarding-UI-element.avif"
              alt="Hiring Leader"
              className="object-cover w-full h-full py-20"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Section: Three Columns */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={fadeUp}
        >
          {[
            {
              title: <>Our mission is to make<br />every company great at hiring</>,
              link: "See how we do it"
            },
            {
              title: <>The executive leadership<br />team and board of directors</>,
              link: "Meet our leadership team"
            },
            {
              title: <>How to connect with us</>,
              link: "Contact us today"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className=""
            >
              <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                {item.title}
              </h2>
              <a
                href="/pre-access"
                onClick={handlePreAccess}
                className="text-blue-700 underline underline-offset-2 font-medium"
              >
                {item.link}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* New Section: The only hiring platform you'll ever need */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-center text-gray-900 mb-20 leading-tight"
          variants={fadeUp}
          custom={0}
        >
          The only hiring platform<br />you’ll ever need
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={fadeUp}
        >
          {[
            {
              img: "https://cdn.prod.website-files.com/6668a687e71e2722fccb8357/6711757c6379b551f1ef78d0_Greenhouse-scorecard-icon-thumbs-up-and-two-women-coworkers-talking.avif",
              title: <>Get more value from<br />your hiring software</>,
              desc: "Stop taking a risk with your recruiting budget and start saving money. Greenhouse has everything you need to make the best possible hires, consistently and quickly."
            },
            {
              img: "https://cdn.prod.website-files.com/6668a687e71e2722fccb8357/6711757c2eb021f98dcbd87e_Diversity-icon-and-asian-man-in-warm-toned-conference-enviroment-wearing-business-attire.avif",
              title: <>Flex and scale with one<br />easy-to-use platform</>,
              desc: "Greenhouse grows with you, from startup to enterprise – with the flexibility to utilise native platform tools and hundreds of pre-built integrations to build your preferred tech stack."
            },
            {
              img: "https://cdn.prod.website-files.com/6668a687e71e2722fccb8357/6711757c8b9b4fcb4d7dccbf_Hiring-maturity-curve-and-woman-in-office-environment-wearing-a-white-suit.avif",
              title: <>Partner with an<br />established industry leader</>,
              desc: "For over a decade, Greenhouse has led the way in hiring innovation and improving the candidate experience, from pioneering structured hiring to embedding AI tools."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
              custom={i}
            >
              <motion.div
                className="w-full h-56 mb-8 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                initial={{ scale: 0.92, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <h3 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}