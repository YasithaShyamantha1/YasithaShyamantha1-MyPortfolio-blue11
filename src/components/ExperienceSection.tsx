"use client";
import { FC } from "react";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";

const experiences = [
  {
    logo: "/departmentlogo.jpeg",
    role: "Software Engineer Internship",
    company: "Department of Agrarian Development Sri Lanka",
    type: "Full-time",
    period: "Aug 2025 - Present · 6 mos",
    location: "Colombo, Western Province, Sri Lanka",
    details: [
      "Worked on government digitalization projects.",
      "Collaborated with cross-functional teams to deliver scalable solutions.",
      "Enhanced internal tools and automated workflows.",
      "Contribution: FarmerNet.lk"
    ]
  },
  {
    logo: "/Fiverr-Logo-700x394.png",
    role: "Freelance Graphic Designer",
    company: "Fiverr",
    type: "Full-time",
    period: "Jan 2021 - Dec 2022 · 2 yrs",
    location: null,
    details: [
      "Vector Illustration, Non-Fungible Tokens (NFTs) and +2 skills"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" }
  })
};




const ExperienceSection: FC = () => (
  <section id="experience" className="w-full bg-[#f5f8fd] py-16 px-4 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-black mb-8 flex items-center gap-2">
      <MdOutlineWork className="text-2xl" /> Experience
    </h2>
    <div className="max-w-3xl w-full flex flex-col gap-8">
      {experiences.map((exp, idx) => (
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
            <img src={exp.logo} alt="logo" className="w-36 h-36 object-contain rounded-2xl bg-white border-4 border-[#3162b9]/40 shadow-2xl" />
          </motion.div>
          {/* Details on the right */}
          <div className="flex-1 flex flex-col justify-center p-6">
            <div className="text-2xl font-extrabold text-black mb-1 tracking-tight">{exp.role}</div>
            <div className="text-lg font-semibold text-black mb-1">{exp.company}</div>
            <div className="text-sm text-gray-700 mb-1">{exp.type} {exp.location && <>· {exp.location}</>}</div>
            <div className="text-xs font-bold text-gray-700 mb-2">{exp.period}</div>
            <ul className="text-base text-gray-700 list-disc list-inside space-y-1 pl-4">
              {exp.details.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, type: 'spring' }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {d}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
