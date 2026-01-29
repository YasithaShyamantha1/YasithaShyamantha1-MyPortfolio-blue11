"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development Expertise",
    description:
      "Crafting responsive websites with clean code and intuitive design. Elevate your online presence with our web development expertise.",
    image: require("../webDev.png"),
    bg: "bg-[#f7d366] text-gray-900",
    link: "#",
  },
  {
    title: "UI/UX Design Excellence",
    description:
      "Creating visually stunning and user-centered designs that enhance user experience and drive engagement. Elevate your brand with our design expertise.",
    image: require("../ui ux design.png"),
    bg: "bg-[#5b7ee5] text-white",
    link: "#",
  },
  {
    title: "Mobile App Innovation",
    description:
      "Building native and cross-platform mobile apps that engage users and drive results. Let's bring your app idea to life!",
    image: require("../mob app.png"),
    bg: "bg-[#111] text-white",
    link: "#",
  },
];
const ServicesSection: FC = () => {
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
    <section id="services" className="w-full bg-white py-24 px-4 flex flex-col items-center">
      <motion.div
        className="max-w-6xl w-full flex flex-col items-start mb-16"
        animate={shaking ? { x: [0, 2, -2, 2, -2, 0], y: [0, -2, 2, -2, 2, 0] } : { x: 0, y: 0 }}
        transition={shaking ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
      >
        <span className="uppercase text-[1rem] tracking-widest text-gray-700 font-semibold mb-2">Our Services</span>
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">Empowering<br/>Your Vision: Our<br/>Services Unveiled</h2>
      </motion.div>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className={`rounded-xl p-8 flex flex-col items-start shadow-xl ${service.bg}`}
            style={{ minHeight: 380, marginTop: idx === 1 ? 40 : idx === 2 ? 80 : 0 }}
            animate={shaking ? { x: [0, 2, -2, 2, -2, 0], y: [0, -2, 2, -2, 2, 0] } : { x: 0, y: 0 }}
            transition={shaking ? { duration: 1.2 + idx * 0.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
          >
            <div className="w-full flex justify-center mb-6">
              <Image
                src={service.image}
                alt={service.title}
                width={140}
                height={120}
                className="rounded-md"
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-lg mb-6 opacity-90">{service.description}</p>
            <a href={service.link} className="font-bold underline flex items-center gap-2 mt-auto">Explore <span>&rarr;</span></a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ...existing code...

export default ServicesSection;
