import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    {
      category: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C",
        "C++",
        "Rust",
        "HTML/CSS",
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "Redux",
        "GoogleTest",
        "Valgrind",
      ],
    },
    {
      category: "Developer Tools",
      items: [
        "Git",
        "GitHub",
        "Linux",
        "CMake",
        "Visual Studio",
        "Figma",
        "Docker",
        "MongoDB",
        "ChromaDB",
      ],
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden text-start"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}

        {/* About content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Bio */}
          <div className="pr-0 md:pr-6">
            <div className="mb-6 md:mb-12">
              <motion.span
                className="block mb-3 text-sm font-medium tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                ABOUT ME
              </motion.span>
              <div className="text-3xl md:text-5xl font-bold">
                {" "}
                My Background
              </div>
            </div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl leading-relaxed">
                I’m a Computer Science major at UC Riverside with a deep
                interest in building tools that make life easier.
              </p>

              <p className="text-gray-600">
                At ACM at UCR, I serve as a web developer building and
                maintaining systems used by hundreds of students. I regularly
                work across the stack — integrating RESTful APIs, optimizing
                backend performance, and designing responsive React interfaces
                that feel fast and intuitive.
              </p>

              <p className="text-gray-600">
                I’ve led and contributed to projects using Python, C++, MongoDB,
                and more, and I’m always looking to grow as an engineer. I love
                turning ideas into working software — especially when it helps
                people solve real problems.
              </p>

              <div className="pt-6">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-black font-medium flex items-center gap-2 group relative overflow-hidden"
                >
                  <motion.span className="inline-block w-8 h-[2px] bg-black group-hover:w-12 transition-all duration-300 relative z-10"></motion.span>
                  <span className="relative z-10">See my work</span>

                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-black"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div>
            <motion.div
              className="bg-black text-green-400 rounded-3xl p-8 md:p-10 shadow-md font-mono border border-green-600 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-8 text-green-300 border-b border-green-700 pb-2">
                $ skills --list
              </h3>

              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm uppercase tracking-wider text-green-500 mb-3">
                      // {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          custom={skillIndex}
                          variants={fadeInUpVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="px-3 py-1 border border-green-600 bg-black text-green-300 rounded text-xs hover:bg-green-700 hover:text-black transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
