"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const education = [
  {
    logo: "/sliit-campus.png",
    degree: "BSc (Hons) in Information Technology - Information Technology",
    university: "Faculty Of Computing | SLIIT",
    period: "Oct 2022 - Present",
    location: "",
    details: []
  },
  {
    logo: "/full-light-color.png",
    degree: "AI Driven Full-stack Developer - Professional Certification",
    university: "STEM Link",
    period: "Dec 2024 - Feb 2025",
    location: "",
    details: []
  },
  {
    logo: "/skyreck.png",
    degree: "MERN Full-stack Developer - Professional Certification",
    university: "SKYRECK",
    period: "Oct 2024 - Jan 2025",
    location: "",
    details: []
  }
];

const EducationSection: FC = () => (
  <section id="education" className="w-full bg-[#f5f8fd] py-16 px-4 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-black mb-8 flex items-center gap-2">
      🎓 Education
    </h2>
    <div className="max-w-3xl w-full flex flex-col gap-8">
      {education.map((edu, idx) => (
        <motion.div
          key={idx}
          className="bg-gradient-to-br from-[#f5f8fd] via-white to-[#e0e7ff] rounded-2xl shadow-xl border-2 border-[#3162b9]/30 p-0 flex flex-col md:flex-row items-stretch hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 relative"
          style={{ borderLeft: '6px solid #b3d6f5', borderTop: '6px solid #ffe066' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo on the left */}
          <motion.div
            className="flex items-center justify-center md:w-1/3 w-full bg-gradient-to-br from-[#e0e7ff] via-white to-[#f5f8fd] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-8 border-b md:border-b-0 md:border-r border-[#3162b9]/20 md:mr-8 border-l-4 border-[#b3d6f5]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            whileHover={{ scale: 1.18, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={edu.logo} alt="logo" className="w-36 h-36 object-contain rounded-2xl bg-white border-4 border-[#3162b9]/40 shadow-2xl" />
          </motion.div>
          {/* Details on the right */}
          <div className="flex-1 flex flex-col justify-center p-6">
            <div className="text-2xl font-extrabold text-black mb-1 tracking-tight">{edu.degree}</div>
            <div className="text-lg font-semibold text-black mb-1">{edu.university}</div>
            <div className="text-xs font-bold text-gray-700 mb-2">{edu.period}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;