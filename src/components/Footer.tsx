import React from "react";
import { FaStar } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-10 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#0a192f] text-gray-700 dark:text-gray-300 py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">

                {/* Left side */}
                <div className="flex items-center space-x-2">
                    <FaStar className="text-yellow-400 animate-pulse" />
                    <span className="font-semibold">
                        ⭐ Give this project a star!
                    </span>
                </div>

                {/* Center text */}
                <div className="text-sm text-center">
                    ▷ Designed & built by{" "}
                    <a
                        href="https://github.com/ChadenBA/my-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:underline"
                    >
                        Chaden ben Ammar
                    </a>{" "}
                    © {new Date().getFullYear()}
                </div>


                {/* Right side */}
                <div className="text-sm italic">
                    Created with ❤️ & sprinkled with ✨
                </div>
            </div>
        </footer>
    );
};

export default Footer;
