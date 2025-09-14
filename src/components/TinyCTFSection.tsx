import React, { useState } from "react";

const TinyCTFSection: React.FC = () => {
  const [showCTF, setShowCTF] = useState(false);
  const [challengeResults, setChallengeResults] = useState({
    devOpsKey: "",
    securityVault: "",
    cryptoPuzzle: "",
  });

  const handleChallenge = (challenge: string, answer: string) => {
    if (challenge === "devOpsKey" && answer.trim() === "amazing") {
      setChallengeResults(prev => ({
        ...prev,
        devOpsKey: "🎉 Correct! I built my first Jenkins pipeline at age 20 🚀",
      }));
    } else if (challenge === "securityVault" && answer.trim() === "secretfolder") {
      setChallengeResults(prev => ({
        ...prev,
        securityVault: "🔑 Correct! Check out my GitHub repo: https://github.com/yourprofile",
      }));
    } else if (challenge === "cryptoPuzzle" && answer.trim() === "secure") {
      setChallengeResults(prev => ({
        ...prev,
        cryptoPuzzle: "🔐 Fun fact: I once cracked my own password hash for learning purposes 😉",
      }));
    } else {
      setChallengeResults(prev => ({
        ...prev,
        [challenge]: "❌ Incorrect, try again!",
      }));
    }
  };

  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setShowCTF(!showCTF)}
          className="bg-purple-500 hover:bg-purple-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
        >
          {showCTF ? "Close Tiny CTF" : "Open Tiny CTF"}
        </button>

        {showCTF && (
          <div className="w-full max-w-4xl mt-6 p-6 bg-black/80 rounded-xl shadow-lg space-y-8">
            <h2 className="text-3xl font-bold text-center text-purple-400 mb-4">
              Chaden’s Play & Hack
            </h2>

            {/* Challenge 1: DevOps Key */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-400">Challenge 1 – The DevOps Key</h3>
              <p className="text-gray-300">
                Decode this to learn how I automated my first CI/CD pipeline! (Hint: type "amazing")
              </p>
              <input
                type="text"
                placeholder="Your answer..."
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleChallenge("devOpsKey", (e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              {challengeResults.devOpsKey && <p className="text-green-300">{challengeResults.devOpsKey}</p>}
            </div>

            {/* Challenge 2: Security Vault */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-400">Challenge 2 – The Security Vault</h3>
              <p className="text-gray-300">
                Hidden key embedded in a snippet of fake code. (Hint: type "secretfolder")
              </p>
              <input
                type="text"
                placeholder="Your answer..."
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleChallenge("securityVault", (e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              {challengeResults.securityVault && <p className="text-green-300">{challengeResults.securityVault}</p>}
            </div>

            {/* Challenge 3: Crypto Puzzle */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-400">Challenge 3 – Crypto Puzzle</h3>
              <p className="text-gray-300">
                Mini cipher or hash challenge. (Hint: type "secure")
              </p>
              <input
                type="text"
                placeholder="Your answer..."
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleChallenge("cryptoPuzzle", (e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              {challengeResults.cryptoPuzzle && <p className="text-green-300">{challengeResults.cryptoPuzzle}</p>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TinyCTFSection;
