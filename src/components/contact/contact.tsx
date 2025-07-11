import {
  useState,
  type FormEvent,
  type ChangeEvent,
  type FocusEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Mail, MapPin } from "lucide-react";
import { toast } from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

type FormFields = "name" | "email" | "message";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<FormFields | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: FormFields) => {
    setFocusedField(field);
  };

  const handleBlur = (
    _e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusedField(null);
  };

  const inputClasses = (field: FormFields) =>
    `w-full px-4 py-2 bg-black border border-green-400 text-green-400 placeholder-green-600 rounded-md
   focus:outline-none focus:ring-2 transition duration-200 ${
     focusedField === field ? "ring-2 ring-green-500" : ""
   }`;

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = formData;

    try {
      const result = await emailjs.send(
        "service_bc74dzm",
        "template_3m2w0ys",
        {
          from_name: name,
          reply_to: email,
          message,
        },
        "aCVtNmJKe8AGkaAaf"
      );

      console.log("Email sent:", result.text);
      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Email failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="block mb-3 text-sm font-medium tracking-wider text-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              GET IN TOUCH
            </motion.span>

            <div className="text-3xl md:text-5xl font-bold mb-6 text-start">
              Let's work together
            </div>

            <motion.p
              className="text-gray-600 mb-8 md:text-lg md:pr-8 text-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always open to new opportunities and conversations. If you'd
              like to connect or collaborate, feel free to get in touch!
            </motion.p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="bg-white p-3 rounded-full shadow-sm"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <div>
                  <a
                    href="mailto:jacobjperez19@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors relative group"
                  >
                    jacobjperez19@gmail.com
                    <motion.span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="bg-white p-3 rounded-full shadow-sm"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <div>
                  <p className="text-gray-600">California, United States</p>
                </div>
              </motion.div>

              <motion.div className="space-y-6">
                {/* GitHub */}
                <motion.div
                  className="flex gap-4 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    className="bg-white p-3 rounded-full shadow-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <a
                      href="https://github.com/Jacob-GHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors relative group"
                    >
                      github.com/jacobjperez
                      <motion.span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  className="flex gap-4 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    className="bg-white p-3 rounded-full shadow-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/jacob-perez-90522a208/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors relative group"
                    >
                      linkedin.com/in/jacobjperez
                      <motion.span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black text-green-400 font-mono rounded-2xl shadow-md p-8 md:p-10 relative overflow-hidden min-h-[450px] border border-green-400"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8"
                >
                  <motion.div className="text-center w-full max-w-sm px-4">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">
                      ✔ Message Sent
                    </h3>
                    <p className="text-green-400 mb-8 text-base">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>

                    <motion.button
                      onClick={resetForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-green-400 text-black rounded-lg font-bold"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={sendEmail}
                  className="space-y-6 text-start"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-green-400 mb-1"
                    >
                      {">"} name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      placeholder="Jacob Perez"
                      required
                      className={inputClasses("name")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-green-400 mb-1"
                    >
                      {">"} email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      required
                      className={inputClasses("email")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-green-400 mb-1"
                    >
                      {">"} message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      placeholder="Message me about anything..."
                      required
                      rows={5}
                      className={`${inputClasses("message")} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
            w-full py-3 px-6 bg-green-400 hover:bg-green-400 text-black rounded-lg font-bold flex items-center justify-center gap-2
            ${loading ? "opacity-70" : ""}
          `}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>$ send-message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            repeatDelay: 1,
                          }}
                        >
                          <Send size={18} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
