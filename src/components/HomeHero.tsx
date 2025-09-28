import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { useTheme } from "@mui/material";
import DownloadCVButton from "@/components/DownloadCVButton";
import { Variants, motion } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
  }),
};

const HomeHero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const accentGradient = "bg-gradient-to-r from-blue-500 to-purple-500";

  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 py-12 ${bgColor} ${textColor}`}
    >
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className={`text-transparent bg-clip-text ${accentGradient}`}>
            Chaden
          </span>{" "}
          Ben Ammar
        </h1>

        <motion.div
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-3"
          initial="hidden"
          animate="visible"
        >
          <motion.div custom={0} variants={textVariants} className="mt-3">
            🏆{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Top 1% on TryHackMe
            </span>
          </motion.div>

         

          <motion.p custom={2} variants={textVariants}>
            Passionate about{" "}
            <span className="font-medium">Software Engineering</span>,{" "}
            <span className="font-medium">DevOps</span>,{" "}
            <span className="font-medium">DevSecOps</span>, and{" "}
            <span className="font-medium">Cybersecurity</span>.
          </motion.p>

          <motion.p custom={3} variants={textVariants}>
             Always exploring and learning in the world of{" "}
            <span className="font-semibold">secure software development</span>.
          </motion.p>
        </motion.div>

        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
          <a
            href="https://github.com/ChadenBA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl sm:text-3xl hover:text-blue-400 cursor-pointer transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/chaden-ben-ammar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-3xl hover:text-blue-400 cursor-pointer transition-colors" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 items-center">
          <a
            href="mailto:youremail@example.com"
            className={`flex items-center justify-center ${accentGradient} text-white px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105`}
          >
            <HiOutlineMail className="mr-2" /> Contact Me
          </a>
          <a
            href="tel:+21699590388"
            className={`flex items-center justify-center px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105 ${
              isDark ? "bg-[#1f2937] text-white" : "bg-gray-200 text-black"
            }`}
          >
            <BsPhone className="mr-2" /> (+216) 99590388
          </a>

          <DownloadCVButton />
        </div>
      </div>

      <div className="flex-1 flex justify-center mb-8 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`rounded-full border-4 p-1 ${accentGradient}`}
        >
          <Image
            src="/images/Confident_Professional_Portrait-removebg-preview.png"
            alt="Chaden Ben Ammar"
            width={300}
            height={300}
            className="rounded-full w-40 sm:w-48 md:w-60 lg:w-72 h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;