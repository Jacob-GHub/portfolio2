import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --------- Types ---------
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface Card3DProps {
  project: Project;
  index: number;
}

interface ProjectCardGridProps {
  projects: Project[];
}

// --------- Card3D Component ---------
const Card3D: React.FC<Card3DProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className="relative h-96 rounded-2xl overflow-hidden"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      <motion.div
        className="w-full h-full relative rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            animate={{
              x: isHovered ? rotation.y * -3 : 0,
              y: isHovered ? rotation.x * 3 : 0,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            animate={{
              z: isHovered ? 50 : 0,
              transition: { type: "spring", stiffness: 80, damping: 15 },
            }}
          >
            <motion.h3
              className="text-xl font-bold text-white mb-2"
              animate={{
                y: isHovered ? -5 : 0,
                transition: { type: "spring", stiffness: 100 },
              }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-white text-sm mb-4 font-bold line-clamp-2"
              animate={{
                y: isHovered ? -3 : 0,
                opacity: isHovered ? 1 : 0.3,
                transition: { type: "spring", stiffness: 100, delay: 0.05 },
              }}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex gap-2 mb-4"
              animate={{
                y: isHovered ? -2 : 0,
                opacity: isHovered ? 1 : 0.5,
                transition: { type: "spring", stiffness: 100, delay: 0.1 },
              }}
            >
              {project.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none" />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2 shadow-lg hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                View Project <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// --------- ProjectCardGrid Component ---------
const ProjectCardGrid: React.FC<ProjectCardGridProps> = ({ projects }) => {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 text-start">
          <motion.span
            className="block mb-3 text-sm font-medium tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            MY WORK
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card3D key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCardGrid;
