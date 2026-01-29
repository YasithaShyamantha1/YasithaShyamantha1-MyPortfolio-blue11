
"use client";
import { FC, useState } from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";



const ProjectsSection: FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-16 min-h-screen bg-white dark:bg-[#0a2540]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-blue-900 dark:text-cyan-100">
          Featured Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              className="rounded-2xl bg-blue-50 dark:bg-[#112e4d] border border-blue-100 dark:border-cyan-900 shadow-lg overflow-hidden flex flex-col group relative hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Project Image with overlay */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image || "/default-project.jpg"}
                  alt={project.name}
                  fill
                  style={{objectFit: 'cover'}}
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 3}
                />
                <button
                  className="absolute inset-0 bg-blue-900/40 dark:bg-cyan-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 rounded-lg text-white font-bold text-lg shadow-lg hover:bg-[#ffe066] hover:text-[#3162b9] transition-all"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.name}`}
                >
                  View Details
                </button>
              </div>
              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-cyan-100 mb-2 drop-shadow-lg">{project.name}</h3>
                <p className="text-blue-800 dark:text-cyan-100 text-base mb-3 line-clamp-2">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="bg-blue-200 dark:bg-cyan-900 text-blue-900 dark:text-cyan-100 px-3 py-1 rounded-full text-xs font-semibold shadow">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="bg-blue-200 dark:bg-cyan-900 text-blue-900 dark:text-cyan-100 px-3 py-1 rounded-full text-xs font-semibold shadow">+{project.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
