import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLockOpen } from "react-icons/fa";

const tools = [
  { id: "github", name: "GitHub", icon: "/icons/github.png" },
  { id: "jenkins", name: "Jenkins", icon: "/icons/jenkins.png" },
  { id: "docker", name: "Docker", icon: "/icons/docker.png" },
  { id: "kubernetes", name: "Kubernetes", icon: "/icons/kubernetes.png" },
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
      setDecoded(" Wrong decoding!");
    }
  };

  const handleSelect = (toolId: string) => {
    setSelected(toolId);
  };

  const handleDrop = (slotIndex: number) => {
    if (selected) {
      const newSlots = [...slots];
      newSlots[slotIndex] = selected;
      setSlots(newSlots);
      setSelected(null);

      const correctOrder = tools.map((t) => t.id);
      if (JSON.stringify(newSlots) === JSON.stringify(correctOrder)) {
        setSolved({ ...solved, pipeline: true });
      }
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
    }, 1000);
  };

  const allSolved = Object.values(solved).every(Boolean);

  return (
    <section className="w-full py-16 bg-gray-950 text-white text-center relative">
      <h2 className="text-3xl font-bold mb-6">🕹️ Chaden’s Play & Hack</h2>
      <p className="mb-8 text-gray-400">
        Solve the mini challenges to unlock the vault 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
        {/* Challenge 1: Decode */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">🔑 Challenge 1: Decode the Secret</h3>
          <p className="text-sm text-gray-400 mb-2">
            Decode this Base64 string:
          </p>
          <code className="block bg-black p-2 rounded mb-4">
            Q2hhZGVuIGxvdmVzIERldk9wcw==
          </code>
          <button
            onClick={handleDecode}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
          >
            Decode
          </button>
          {decoded && <p className="mt-4 text-green-400">{decoded}</p>}
          {solved.decode && <p className="text-green-500 mt-2">✅ Solved!</p>}
        </div>

        {/* Challenge 2: Drag-and-Drop */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">⚙️ Challenge 2: Build the Pipeline</h3>
          <p className="text-sm text-gray-400 mb-4">Arrange the tools in the right order</p>
          <div className="flex gap-2 mb-4 justify-center">
            {slots.map((slot, index) => (
              <div
                key={index}
                onClick={() => handleDrop(index)}
                className="w-16 h-16 border-2 border-dashed border-gray-600 flex items-center justify-center rounded-lg bg-gray-800 cursor-pointer"
              >
                {slot ? (
                  <img
                    src={tools.find((t) => t.id === slot)?.icon}
                    alt={slot}
                    className="w-10 h-10"
                  />
                ) : (
                  <span className="text-xs text-gray-500">Drop</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(tool.id)}
                className={`w-16 h-16 bg-white/10 border border-gray-700 flex items-center justify-center rounded-lg cursor-pointer ${
                  selected === tool.id ? "ring-4 ring-green-400" : ""
                }`}
              >
                <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
              </motion.div>
            ))}
          </div>
          {solved.pipeline && <p className="text-green-500 mt-2">✅ Solved!</p>}
        </div>

        {/* Challenge 3: Hidden Flag */}
<div className="bg-gray-900 p-6 rounded-xl shadow-lg">
  <h3 className="text-xl font-semibold mb-4">🕵️ Challenge 3: Find the Hidden Flag</h3>
  <p className="text-sm text-gray-400 mb-4">
    Look carefully in the code snippet below 👀
  </p>
  <pre className="bg-black p-3 rounded text-left text-xs overflow-x-auto">
{`function myProject() {
  console.log("Running secure container...");
  // secret_key: FLAG{docker_master}
  return true;
}`}
  </pre>
  <button
    onClick={() => setFlagFound(true)}
    className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 mt-4"
  >
    Reveal Flag
  </button>
  {flagFound && (
    <>
      <p className="mt-4 text-green-400">FLAG{"{docker_master}"} ✅</p>
      <p className="text-green-500 mt-2">✅ Solved!</p>
    </>
  )}
</div>

        {/* Challenge 4: Hacker Scan */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">💻 Challenge 4: Run the Scan</h3>
          <button
            onClick={runScan}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 mb-4"
          >
            Run Scan
          </button>
          <div className="bg-black p-3 rounded text-left text-xs h-40 overflow-y-auto">
            {scanLogs.map((log, i) => (
              <p key={i} className="text-green-400">{log}</p>
            ))}
          </div>
          {solved.scan && <p className="text-green-500 mt-2">✅ Solved!</p>}
        </div>
      </div>

      {/* Final Vault */}
      {allSolved && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-12 bg-green-900/30 border border-green-600 p-8 rounded-xl inline-block"
        >
          <FaLockOpen className="text-5xl text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">🎉 Vault Unlocked!</h3>
          <p className="mb-4 text-gray-300">
            Congrats hacker, you solved all challenges!  
            Here’s my GitHub 👉
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 rounded hover:bg-green-500"
          >
            <FaGithub /> Visit GitHub
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default TinyCTFSection;
