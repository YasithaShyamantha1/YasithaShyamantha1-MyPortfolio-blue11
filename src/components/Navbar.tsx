"use client";
import Link from "next/link";



import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-[60px] py-4 md:py-6 bg-[#3162b9] text-white relative z-20" style={{boxShadow: '0 2px 16px 0 rgba(49,98,185,0.08)'}}>
      <div className="text-2xl md:text-[2.5rem] font-bold tracking-tight leading-none" style={{fontFamily: 'inherit'}}>Yasitha Shyamantha</div>
      {/* Hamburger menu for mobile */}
      <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      <ul className={`flex-col md:flex-row flex gap-6 md:gap-10 items-center text-base md:text-[1.15rem] font-medium absolute md:static top-full left-0 w-full md:w-auto bg-[#3162b9] md:bg-transparent z-10 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <li><Link href="#home" className="hover:underline transition-all py-2 md:py-0 w-full block text-center md:text-left">Home</Link></li>
        <li><Link href="#about" className="hover:underline transition-all py-2 md:py-0 w-full block text-center md:text-left">About</Link></li>
        <li><Link href="#portfolio" className="hover:underline transition-all py-2 md:py-0 w-full block text-center md:text-left">Portfolio</Link></li>
        <li><Link href="#blog" className="hover:underline transition-all py-2 md:py-0 w-full block text-center md:text-left">Blog</Link></li>
        <li><Link href="#contact" className="hover:underline transition-all py-2 md:py-0 w-full block text-center md:text-left">Contact</Link></li>
        <li className="w-full md:w-auto flex justify-center md:block">
          <Link href="#projects" className="mt-2 md:mt-0 px-5 md:px-7 py-2 rounded-xl border border-[#7faaff] bg-transparent text-white font-bold shadow-none hover:bg-white hover:text-[#3162b9] transition-all text-base md:text-lg w-full md:w-auto block" style={{borderWidth: '2px'}}>Explore My Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
