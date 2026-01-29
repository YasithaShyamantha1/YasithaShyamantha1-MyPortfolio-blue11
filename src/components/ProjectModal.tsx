import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[4px]">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/20 dark:bg-[#1a2740]/40 backdrop-blur-xl"
      style={{ boxShadow: '0 8px 40px 0 rgba(30,40,90,0.25), 0 1.5px 8px 0 rgba(30,40,90,0.10)' }}
    >
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-[#223355]/60 text-2xl text-blue-900 dark:text-cyan-100 hover:bg-red-500 hover:text-white transition-all shadow-lg border border-white/30"
        onClick={onClose}
        aria-label="Close"
        style={{backdropFilter: 'blur(6px)'}}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div className="w-full h-56 relative">
        <Image
          src={project.image || "/default-project.jpg"}
          alt={project.name}
          fill
          style={{objectFit: 'cover'}}
          className="rounded-t-3xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60 dark:via-[#1a2740]/40 dark:to-[#1a2740]/80 pointer-events-none rounded-t-3xl" />
      </div>
      <div className="p-10 md:p-12 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-900 dark:text-cyan-100 drop-shadow-lg">{project.name}</h2>
        <p className="mb-4 text-blue-800 dark:text-cyan-100 text-lg font-medium">{project.summary}</p>
        <div className="mb-4">
          <span className="font-semibold text-lg text-blue-900 dark:text-cyan-100">Technologies</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack?.map((tech: string) => (
              <span key={tech} className="bg-blue-200/80 dark:bg-cyan-900/80 text-blue-900 dark:text-cyan-100 px-3 py-1 rounded-full text-xs font-semibold shadow">{tech}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-[#5b7ee5]/90 text-white font-bold text-lg shadow-lg hover:bg-[#ffe066] hover:text-[#3162b9] transition-all">Live Demo</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg border border-[#5b7ee5] text-[#5b7ee5] font-bold text-lg shadow-lg hover:bg-[#5b7ee5] hover:text-white transition-all">View Code</a>
          )}
        </div>
      </div>
    </motion.div>
  </div>
);

export default ProjectModal;
