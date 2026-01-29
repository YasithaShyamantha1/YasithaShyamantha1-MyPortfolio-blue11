"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const aboutText = `
I am a fourth-year Information Technology undergraduate at SLIIT with strong experience in full-stack web development and a growing focus on Machine Learning and Deep Learning projects. I specialize in HTML, CSS, JavaScript, and modern frameworks such as React.js and Next.js, with hands-on experience in building and consuming RESTful APIs. I am comfortable working with both SQL and NoSQL databases, including MySQL and MongoDB, and have a solid foundation in object-oriented programming using Java and Python.

Currently, I am actively working on Machine Learning and Deep Learning projects, applying concepts such as data preprocessing, model training, and evaluation to solve real-world problems. I am adaptable, motivated, and eager to contribute to a dynamic team.`;

const AboutSection: FC = () => {
  const [shaking, setShaking] = useState(true);
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleMove = () => {
      setShaking(true);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setShaking(false), 1200);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleMove);
    timeout = setTimeout(() => setShaking(false), 1200);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleMove);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="about" className="w-full bg-white py-10 md:py-14 px-4 flex justify-center items-center relative overflow-hidden -mt-2 md:-mt-4">
    {/* Yellow accent lines background (z-0) */}
    <svg
      width="100%"
      height="320"
      viewBox="0 0 1920 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      {/* Top yellow line */}
      <path d="M-100,70 Q500,-20 1100,70 Q1700,160 2020,20" stroke="#ffe066" strokeWidth="5" fill="none" opacity="0.95"/>
      {/* Bottom yellow line */}
      <path d="M-100,220 Q600,400 1200,220 Q1800,40 2020,300" stroke="#ffe066" strokeWidth="5" fill="none" opacity="0.95"/>
    </svg>
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left: Animated Images (shaking) */}
      <motion.div
        className="relative flex flex-col items-center justify-center min-h-[420px]"
        animate={shaking ? { x: [0, -4, 4, -4, 4, 0], y: [0, 2, -2, 2, -2, 0] } : { x: 0, y: 0 }}
        transition={shaking ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
      >
        <motion.div
          className="absolute left-0 top-0 z-10"
          animate={shaking ? { x: [0, 2, -2, 2, -2, 0], y: [0, -2, 2, -2, 2, 0] } : { x: 0, y: 0 }}
          transition={shaking ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
        >
          <Image
            src={require("../about1.png")}
            alt="About 1"
            width={340}
            height={420}
            className="rounded-xl shadow-xl"
            style={{zIndex: 2}}
          />
        </motion.div>
        <motion.div
          className="absolute left-[-60px] top-[220px] z-0"
          animate={shaking ? { x: [0, -2, 2, -2, 2, 0], y: [0, 2, -2, 2, -2, 0] } : { x: 0, y: 0 }}
          transition={shaking ? { duration: 1.3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
        >
          <Image
            src={require("../About2.png")}
            alt="About 2"
            width={180}
            height={140}
            className="rounded-2xl shadow-lg"
            style={{zIndex: 1}}
          />
        </motion.div>
        <div className="w-[340px] h-[420px] bg-[#f9f2ed] rounded-2xl absolute left-8 top-8 -z-10" />
      </motion.div>
      {/* Right: Text (shaking) */}
      <motion.div
        className="flex flex-col gap-4"
        animate={shaking ? { x: [0, 2, -2, 2, -2, 0], y: [0, -2, 2, -2, 2, 0] } : { x: 0, y: 0 }}
        transition={shaking ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
      >
        <span className="uppercase text-[1rem] tracking-widest text-gray-500 font-semibold mb-2">More About</span>
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">Crafting Digital Dreams: My Creative Journey</h2>
        <div className="text-lg font-bold text-gray-700 mb-2">Software Engineer | Web Developer | ML Enthusiast</div>
        <p className="text-lg text-gray-700 whitespace-pre-line">{aboutText}</p>
      </motion.div>
    </div>

    </section>
  );
};

export default AboutSection;
