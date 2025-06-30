import { motion } from "framer-motion";
import img1 from "@/images/notion.png";
import img2 from "@/images/gmail.png"
import img3 from "@/images/openai.png"
import img4 from "@/images/text.png"
import img5 from "@/images/star-app.png"
import img6 from "@/images/avatar.png"


const icons = [
  { src: img1, alt: "Notion", style: "top-0 left-1/2 -translate-x-1/2" },
  { src: img2, alt: "Gmail", style: "top-1/2 right-0 -translate-y-1/2" },
  { src: img3, alt: "OpenAI", style: "bottom-1/2 left-1/2 -translate-x-1/2" },
  { src: img4, alt: "Text", style: "bottom-0 left-1/3" },
  { src: img6, alt: "Avatar", style: "top-1/3 left-0" },
  { src: img5, alt: "Star App", style: "bottom-0 right-1/3" },
];

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden pb-32">
      {/* Top Section */}
      <div className="pt-48 pb-16 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Using <span className="text-purple-500">AI</span> to help you focus on<br />
          what matters
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          We believe people should spend time solving problems that matter to them - not the busy work that gets in the way.
        </motion.p>
        {/* Animated underline wave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-8 w-full max-w-2xl"
        >
          <svg width="100%" height="48" viewBox="0 0 600 48" fill="none">
            <motion.path
              d="M0 40 Q150 10 300 40 T600 40"
              stroke="url(#wave-gradient)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Animated Icon Grid */}
      <div className="relative w-full flex-1 flex items-center justify-center mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative w-full max-w-3xl h-[400px] mx-auto"
        >
          {/* Dotted background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#a5b4fc" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          {/* Floating icons */}
          {icons.map((icon, i) => (
            <motion.div
              key={icon.alt}
              className={`absolute ${icon.style} z-10`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.15, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.15)" }}
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 border border-white/60">
                <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cookie icon bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.2 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 shadow-lg">
          <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
            <circle cx="12" cy="12" r="10" fill="#6366f1" />
            <circle cx="9" cy="10" r="1.5" fill="#fff" />
            <circle cx="15" cy="14" r="1" fill="#fff" />
            <circle cx="12" cy="16" r="0.7" fill="#fff" />
          </svg>
        </span>
      </motion.div>
    </div>
  );
}