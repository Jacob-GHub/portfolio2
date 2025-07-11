import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface HeaderProps {
  isMobile: boolean;
}

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Header({ isMobile }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      let closestSection = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (rect.top <= window.innerHeight / 2 && distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Increased transparency for glassmorphism effect */}
        <div
          className={`rounded-full backdrop-blur-md px-5 py-3 transition-all duration-500 border border-white/5
            ${scrolled ? "bg-white/25 shadow-lg" : "bg-white/10"}
          `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-xl md:text-2xl font-bold relative z-10 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                Jacob
              </span>
              <span className="text-green-400"> Perez</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            {isMobile ? (
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${
                  scrolled ? "bg-black/10" : "bg-white/10"
                } backdrop-blur-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            ) : (
              <nav className="relative z-20">
                <ul className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.href}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center
        ${
          item.name === "Contact"
            ? "bg-black text-white shadow-md ml-3 hover:gap-2"
            : activeSection === item.href.substring(1)
            ? "text-white"
            : "text-gray-700 hover:text-black"
        }
      `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={item.onClick}
                      >
                        {/* Pill background for active item */}
                        {item.name !== "Contact" &&
                          activeSection === item.href.substring(1) && (
                            <motion.span
                              className="absolute inset-0 bg-black rounded-full -z-10"
                              layoutId="navbar-active-pill"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}

                        {item.name}
                        {item.name === "Contact" && (
                          <ChevronRight size={14} className="ml-1" />
                        )}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu with increased transparency */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[80px] mx-4 rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl border border-white/10 z-40 overflow-hidden"
          >
            <motion.nav
              className="p-6"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.05 * index },
                    }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <a
                      href={item.href}
                      className={`block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
                        activeSection === item.href.substring(1)
                          ? "bg-black text-white"
                          : "hover:bg-black/5"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        item.onClick && item.onClick();
                      }}
                    >
                      {item.name}
                      {item.icon}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.25 },
                  }}
                ></motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
