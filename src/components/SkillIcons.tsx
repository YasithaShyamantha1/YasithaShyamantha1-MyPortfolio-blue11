import { FaReact, FaJava, FaBootstrap, FaGitAlt, FaAws, FaNodeJs, FaGithub, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiSpringboot, SiRedux, SiMysql, SiMongodb, SiNextdotjs, SiOpenai, SiExpress, SiFirebase, SiNetlify, SiRender } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Java', icon: FaJava, color: 'text-red-700' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-700' },
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-800' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
  { name: 'PHP', icon: FaPhp, color: 'text-indigo-700' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-700' },
  { name: 'AI (OpenAI)', icon: SiOpenai, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-600' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-700' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
  { name: 'Netlify', icon: SiNetlify, color: 'text-green-400' },
  { name: 'Render', icon: SiRender, color: 'text-blue-400' },
];

export default function SkillIcons() {
  return (
    <div className="p-0 mt-4">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow">TECHNICAL SKILLS <span><GiArtificialIntelligence size={24} color="#fff" /></span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map(({ name, icon: Icon, color }, idx) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col items-center justify-center gap-1 bg-white rounded-lg p-3 shadow hover:shadow-xl cursor-pointer border border-black"
          >
            <Icon color={getIconColor(color)} size={30} />
            <span className="text-xs font-semibold text-black mt-1">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
// removed extraneous closing brace

// Helper to convert Tailwind text color to hex or CSS color
function getIconColor(tw: string) {
  switch (tw) {
    case 'text-blue-400': return '#60a5fa';
    case 'text-yellow-300': return '#fde68a';
    case 'text-blue-500': return '#3b82f6';
    case 'text-red-700': return '#b91c1c';
    case 'text-green-700': return '#15803d';
    case 'text-orange-500': return '#f97316';
    case 'text-blue-600': return '#2563eb';
    case 'text-green-600': return '#16a34a';
    case 'text-purple-500': return '#a21caf';
    case 'text-blue-800': return '#1e40af';
    case 'text-black': return '#000';
    case 'text-indigo-700': return '#4338ca';
    case 'text-yellow-500': return '#eab308';
    case 'text-gray-800': return '#1f2937';
    case 'text-purple-700': return '#7c3aed';
    case 'text-green-500': return '#22c55e';
    case 'text-gray-700': return '#374151';
    case 'text-yellow-600': return '#ca8a04';
    case 'text-orange-700': return '#c2410c';
    case 'text-orange-400': return '#fb923c';
    case 'text-green-400': return '#4ade80';
    default: return '#333';
  }
}
}
