import Link from "next/link";


const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-[60px] py-6 bg-[#3162b9] text-white relative z-20" style={{boxShadow: '0 2px 16px 0 rgba(49,98,185,0.08)'}}>
    <div className="text-[2.5rem] font-bold tracking-tight leading-none" style={{fontFamily: 'inherit'}}>Yasitha Shyamantha</div>
    <ul className="flex gap-10 items-center text-[1.15rem] font-medium">
      <li><Link href="#home" className="hover:underline transition-all">Home</Link></li>
      <li><Link href="#about" className="hover:underline transition-all">About</Link></li>
      <li><Link href="#portfolio" className="hover:underline transition-all">Portfolio</Link></li>
      <li><Link href="#blog" className="hover:underline transition-all">Blog</Link></li>
      <li><Link href="#contact" className="hover:underline transition-all">Contact</Link></li>
      <li>
        <Link href="#projects" className="ml-2 px-7 py-2 rounded-xl border border-[#7faaff] bg-transparent text-white font-bold shadow-none hover:bg-white hover:text-[#3162b9] transition-all text-lg" style={{borderWidth: '2px'}}>Explore My Projects</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
