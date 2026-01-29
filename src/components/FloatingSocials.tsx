import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/YasithaShyamantha1",
    icon: <FaGithub />,
    color: "bg-[#181717] hover:bg-[#333] text-white"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yasitha-shyamantha-a91905314",
    icon: <FaLinkedin />,
    color: "bg-[#0077b5] hover:bg-[#005983] text-white"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/YasithaShyaman1",
    icon: <FaTwitter />,
    color: "bg-[#1da1f2] hover:bg-[#0d8ddb] text-white"
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/yasitha.godaarawa?_rdc=1&_rdr#",
    icon: <FaFacebook />,
    color: "bg-[#1877f3] hover:bg-[#145db2] text-white"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yasith_shy",
    icon: <FaInstagram />,
    color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white"
  }
];

const FloatingSocials: FC = () => (
  <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4 items-end">
    {socials.map((s) => (
      <a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl text-2xl transition-all duration-200 ${s.color} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
        aria-label={s.name}
      >
        {s.icon}
      </a>
    ))}
  </div>
);

export default FloatingSocials;
