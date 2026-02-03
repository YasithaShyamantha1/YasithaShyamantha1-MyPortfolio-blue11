"use client";
import { FC } from "react";
import { personal } from "@/data/personal";
import { useState } from "react";
import HireMeModal from "./HireMeModal";
import { motion } from "framer-motion";
import { Sparkles, User } from "lucide-react";
import Image from "next/image";

import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

import SkillIcons from './SkillIcons';




const HeroSection: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#4a7ad6] overflow-hidden" style={{paddingTop: '0'}}>
      {/* Wavy SVG background */}
      <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1920 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{minHeight: 800}}>
        {/* Blue background wave */}
        <path d="M0,120 Q480,240 960,120 T1920,120 L1920,800 L0,800 Z" fill="#3162b9"/>
        {/* Yellow accent lines */}
        <path d="M0,220 Q960,400 1920,220" stroke="#ffe066" strokeWidth="5" fill="none"/>
        <path d="M0,400 Q960,600 1920,400" stroke="#ffe066" strokeWidth="3" fill="none"/>
        {/* White lower wave - more pronounced curve */}
        <path d="M0,600 Q400,750 900,650 Q1400,550 1920,700 L1920,800 L0,800 Z" fill="#fff"/>
      </svg>
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 pt-20">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 text-white items-start w-full md:w-auto">
          <span className="uppercase tracking-widest text-[1.1rem] font-semibold text-white/80 mb-2" style={{letterSpacing: '0.12em'}}>Full-Stack Wizard</span>
          <h1 className="text-[4rem] font-extrabold leading-[1.1] drop-shadow-lg mb-2" style={{fontFamily: 'inherit'}}>Hello, I’m <span className="text-white">Yasitha</span></h1>
          <p className="text-[1.25rem] text-white/90 max-w-md mb-4">Crafting seamless web experiences with cutting-edge technology.</p>
          <SkillIcons />
          {/* Removed Hire Me button from here */}
        </div>
        {/* Right: Cartoon Avatar Card */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="rounded-2xl bg-[#ffe066] shadow-2xl p-0 flex flex-col items-center w-full max-w-[420px] h-[440px] relative" style={{overflow: 'hidden', border: 'none'}}>
            {/* Placeholder cartoon avatar */}
            <div className="w-full h-[330px] flex items-center justify-center bg-[#ffe066] rounded-t-2xl" style={{overflow: 'hidden'}}>
              <Image
                src="/avatar.jpg"
                alt="Cartoon Character"
                fill
                style={{objectFit: 'cover', borderRadius: '1.5rem'}}
                priority
              />
            </div>
            <div className="w-full h-[110px] bg-gradient-to-t from-white/90 to-transparent absolute bottom-0 left-0 rounded-b-2xl" />
            <div className="absolute bottom-6 left-6 text-[#3162b9] font-semibold text-base">I’m</div>
            <div className="absolute bottom-6 left-14 text-[#3162b9] font-bold text-xl">Yasitha Shyamantha</div>
          </div>
          <button
            className="mt-6 px-7 py-3 rounded-lg bg-[#ffe066] text-[#3162b9] font-bold shadow hover:bg-[#ffe066]/90 transition-all text-lg"
            style={{width: '140px', textAlign: 'center'}}
            onClick={() => setModalOpen(true)}
          >
            Hire Me
          </button>
        </div>
      </div>
      <HireMeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        email={personal.email}
        phone={"0763723446"}
      />
    </section>
  );
};

export default HeroSection;
