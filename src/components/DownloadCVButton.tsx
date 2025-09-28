import React, { useState } from "react";

const DownloadCVButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white  px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition w-full"
      >
        Download CV ▾
      </button>

      {open && (
        <div className="absolute mt-2 w-44 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
          <a
            href="/cv/CV_Chaden_ben_ammar_eng_devops.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-white hover:bg-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            English
          </a>
          <a
            href="/cv/CV_Chaden_ben_ammar_fr_devops.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-white hover:bg-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            French
          </a>
          <a
            href="/cv/Chaden_Ben_Ammar_CV_sec.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-white hover:bg-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Cybersecurity CV
          </a>
        </div>
      )}
    </div>
  );
};

export default DownloadCVButton;
