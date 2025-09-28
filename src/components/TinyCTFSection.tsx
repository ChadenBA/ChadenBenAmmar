import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLockOpen } from "react-icons/fa";

const tools = [
  { id: "kubernetes", name: "Kubernetes", icon: "/icons/Kubernetes.png" },
  { id: "jenkins", name: "Jenkins", icon: "/icons/Jenkins.png" },
  { id: "github", name: "GitHub", icon: "/icons/github.svg" },
  { id: "docker", name: "Docker", icon: "/icons/docker.png" },
];

const TinyCTFSection: React.FC = () => {
  const [decoded, setDecoded] = useState("");
  const [slots, setSlots] = useState<(string | null)[]>([null, null, null, null]);
  const [selected, setSelected] = useState<string | null>(null);
  const [flagFound, setFlagFound] = useState(false);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [solved, setSolved] = useState({
    decode: false,
    pipeline: false,
    flag: false,
    scan: false,
  });

  const handleDecode = () => {
    try {
      const result = atob("Q2hhZGVuIGxvdmVzIERldk9wcw==");
      setDecoded(result);
      setSolved({ ...solved, decode: true });
    } catch {
      setDecoded("❌ Wrong decoding!");
    }
  };

  const handleSelect = (toolId: string) => setSelected(toolId);

  const handleDrop = (slotIndex: number) => {
    if (!selected) return;
    const newSlots = [...slots];
    newSlots[slotIndex] = selected;
    setSlots(newSlots);
    setSelected(null);

    const correctOrder = tools.map((t) => t.id);
    if (JSON.stringify(newSlots) === JSON.stringify(correctOrder)) {
      setSolved({ ...solved, pipeline: true });
    }
  };

  const runScan = () => {
    const messages = [
      "[*] Connecting to Chaden's portfolio...",
      "[*] Running security scan...",
      "[+] Found 0 critical bugs.",
      "[+] Deploying containers...",
      "[✔] Vault unlocked!",
    ];
    let i = 0;
    setScanLogs([]);
    const interval = setInterval(() => {
      setScanLogs((prev) => [...prev, messages[i]]);
      i++;
      if (i === messages.length) {
        clearInterval(interval);
        setSolved((s) => ({ ...s, scan: true }));
      }
    }, 800); // faster logs
  };

  const allSolved = Object.values(solved).every(Boolean);

  return (
    <section className="w-full py-12 bg-gray-950 text-white text-center px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">🕹️ Tiny CTF Challenge</h2>
      <p className="mb-6 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
        Solve the mini challenges to unlock the vault 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Challenge 1: Decode */}
        <div className="bg-gray-900 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-semibold mb-2">🔑 Decode the Secret</h3>
          <p className="text-xs md:text-sm text-gray-400 mb-2">Decode this Base64 string:</p>
          <code className="block bg-black p-2 rounded text-xs md:text-sm mb-2">
            Q2hhZGVuIGxvdmVzIERldk9wcw==
          </code>
          <button
            onClick={handleDecode}
            className="px-3 py-1 md:px-4 md:py-2 bg-green-600 rounded hover:bg-green-500 text-xs md:text-sm mb-1"
          >
            Decode
          </button>
          {decoded && <p className="text-green-400 text-xs md:text-sm">{decoded}</p>}
          {solved.decode && <p className="text-green-500 text-xs mt-1">✅ Solved!</p>}
        </div>

        {/* Challenge 2: Pipeline */}
        <div className="bg-gray-900 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-semibold mb-2">⚙️ Build the Pipeline</h3>
          <p className="text-xs md:text-sm text-gray-400 mb-2">Arrange the tools in the correct order</p>
          <div className="flex gap-1 md:gap-2 mb-2 flex-wrap justify-center">
            {slots.map((slot, idx) => (
              <div
                key={idx}
                onClick={() => handleDrop(idx)}
                className="w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center cursor-pointer bg-gray-800"
              >
                {slot ? (
                  <img src={tools.find((t) => t.id === slot)?.icon} alt={slot} className="w-8 h-8 md:w-10 md:h-10" />
                ) : (
                  <span className="text-[8px] md:text-xs text-gray-500">Drop</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-1 md:gap-2 flex-wrap justify-center">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(tool.id)}
                className={`w-12 h-12 md:w-16 md:h-16 bg-white/10 border border-gray-700 flex items-center justify-center rounded-lg cursor-pointer ${
                  selected === tool.id ? "ring-2 md:ring-4 ring-green-400" : ""
                }`}
              >
                <img src={tool.icon} alt={tool.name} className="w-8 h-8 md:w-10 md:h-10" />
              </motion.div>
            ))}
          </div>
          {solved.pipeline && <p className="text-green-500 text-xs md:text-sm mt-1">✅ Solved!</p>}
        </div>

        {/* Challenge 3: Hidden Flag */}
        <div className="bg-gray-900 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-semibold mb-2">🕵️ Find the Hidden Flag</h3>
          <pre className="bg-black p-2 md:p-3 rounded text-[10px] md:text-xs overflow-x-auto w-full mb-2">
{`function myProject() {
  console.log("Running secure container...");
  // secret_key: FLAG{docker_master}
  return true;
}`}
          </pre>
          <button
            onClick={() => setFlagFound(true)}
            className="px-3 py-1 md:px-4 md:py-2 bg-green-600 rounded hover:bg-green-500 mb-1 text-xs md:text-sm"
          >
            Reveal Flag
          </button>
          {flagFound && (
            <>
              <p className="text-green-400 text-xs md:text-sm">FLAG{"{docker_master}"} ✅</p>
              <p className="text-green-500 text-xs md:text-sm mt-1">✅ Solved!</p>
            </>
          )}
        </div>

        {/* Challenge 4: Hacker Scan */}
        <div className="bg-gray-900 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-semibold mb-2">💻 Run the Scan</h3>
          <button
            onClick={runScan}
            className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 rounded hover:bg-blue-500 mb-2 text-xs md:text-sm"
          >
            Run Scan
          </button>
          <div className="bg-black p-2 md:p-3 rounded text-[10px] md:text-xs h-32 md:h-40 overflow-y-auto w-full text-left">
            {scanLogs.map((log, i) => (
              <p key={i} className="text-green-400">{log}</p>
            ))}
          </div>
          {solved.scan && <p className="text-green-500 text-xs md:text-sm mt-1">✅ Solved!</p>}
        </div>
      </div>

      {/* Final Vault */}
      {allSolved && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 bg-green-900/20 border border-green-600 p-6 md:p-8 rounded-xl inline-block"
        >
          <FaLockOpen className="text-4xl md:text-5xl text-green-400 mx-auto mb-2 md:mb-4" />
          <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">🎉 Vault Unlocked!</h3>
          <p className="mb-2 md:mb-4 text-gray-300 text-xs md:text-sm">
            Congrats hacker, you solved all challenges! Here’s my GitHub:
          </p>
          <a
            href="https://github.com/ChadenBA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-green-600 rounded hover:bg-green-500 text-xs md:text-sm"
          >
            <FaGithub /> Visit GitHub
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default TinyCTFSection;
