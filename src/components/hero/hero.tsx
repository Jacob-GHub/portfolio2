import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import "../../index.css";

export default function HeroSection() {
  // Google Drive resume link
  const resumeUrl =
    "https://drive.google.com/file/d/1oGlguQVghXRzhlEU2ZlO02NttYSIqkZc/view?usp=sharing";

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Convert the Google Drive link to an export link that forces download
    const exportUrl = resumeUrl.replace(
      "/edit?usp=sharing",
      "/export?format=pdf"
    );
    window.open(exportUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-start items-center">
          {/* Left column - Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-sm font-medium tracking-wider bg-black text-white px-4 py-1.5 rounded-full">
                SOFTWARE ENGINEER
              </span>
            </motion.div>

            <div className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Developing Robust Software For Real-World Problems
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg"
            >
              I develop full-stack applications that prioritize performance,
              maintainability, and a seamless user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-black text-white rounded-full font-medium flex items-center justify-center gap-2 group shadow-sm hover:shadow-md transition-shadow"
              >
                View my work
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 3 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.6,
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>

              <motion.button
                onClick={handleResumeDownload}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#000000",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="px-8 py-4 border-2 border-black text-black rounded-full font-medium flex items-center justify-center gap-2 hover:gap-3 transition-all"
              >
                Download Resume
                <Download size={18} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right column - Animated Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-black"
          >
            <div className="absolute inset-0 p-6 text-green-400 font-mono text-sm z-10">
              <div className="flex flex-col items-start gap-2 h-full">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                {/* Simulated terminal lines */}
                <div className="mt-4 space-y-2 flex flex-col font-mono text-green-400 text-sm items-start overflow-x-auto px-2 max-w-full">
                  <div className="whitespace-nowrap border-green-400">
                    const Jacob = () =&gt; console.log("Let's work togther!");
                  </div>
                  <div className="whitespace-nowrap border-green-400">
                    const skills = ["React", "Python", "C++"];
                  </div>
                  <div className="whitespace-nowrap border-green-400">
                    export default Jacob;
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom overlay for text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="text-white/90 text-sm uppercase tracking-wider font-medium">
                  Open to opportunities
                </span>
                <h3 className="text-white text-xl font-semibold">
                  Let's build something meaningful together
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
