import React from "react";
import { motion } from "framer-motion";

export function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Orange left beam */}
      <motion.div
        initial={{ x: -200, opacity: 0.7 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/3"
        style={{
          background: "linear-gradient(120deg, #ff6a00 60%, transparent 100%)",
          filter: "blur(32px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Orange right beam */}
      <motion.div
        initial={{ x: 200, opacity: 0.7 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-1/3"
        style={{
          background: "linear-gradient(-120deg, #ff6a00 60%, transparent 100%)",
          filter: "blur(32px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Blue left beam */}
      <motion.div
        initial={{ x: -100, opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute left-0 bottom-0 h-2/3 w-1/2"
        style={{
          background: "linear-gradient(100deg, #00b2ff 60%, transparent 100%)",
          filter: "blur(48px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Blue right beam */}
      <motion.div
        initial={{ x: 100, opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute right-0 bottom-0 h-2/3 w-1/2"
        style={{
          background: "linear-gradient(-100deg, #00b2ff 60%, transparent 100%)",
          filter: "blur(48px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Central blue glow */}
      <motion.div
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute left-1/2 bottom-0 -translate-x-1/2"
        style={{
          width: "70vw",
          height: "40vh",
          background: "radial-gradient(ellipse at center, #38bdf8 60%, transparent 100%)",
          filter: "blur(32px)",
          opacity: 0.7,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}