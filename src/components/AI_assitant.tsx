import React, { useState } from "react";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "assistant";
  text: string;
  time: string;
}

const knowledgeBase: Record<string, string> = {
  greeting:
    "Hi! I'm Chaden's AI assistant 🤖. I can help you learn about his skills, projects, experience, certifications, or contact information. What would you like to know?",
  projects:
    "Chaden has several projects on GitHub showcasing DevOps automation, security tools, and CTF challenges. You can check his GitHub for detailed info.",
  skills:
    "Chaden is skilled in DevOps, cybersecurity, automation, and programming. He has experience with Jenkins, Docker, Kubernetes, and more.",
  experience:
    "Chaden has worked on automation pipelines, security monitoring, and cloud deployments. He enjoys solving complex challenges and learning new tech.",
  education:
    "Chaden studied Computer Science and continuously improves his skills through online platforms and practical projects.",
  certifications:
    "Chaden holds certifications in DevOps, security, and programming including eJPT, Red Hat (RHCSA, RHCE), and more.",
  contact:
    "You can reach Chaden via email, LinkedIn, or GitHub. Use the contact form in this portfolio to send a message!",
};

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: knowledgeBase.greeting,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [...prev, { sender: "user", text, time }]);
    setInput("");

    const key = text.toLowerCase().trim();
    const reply =
      knowledgeBase[key as keyof typeof knowledgeBase] ||
      "That's an interesting question! I can help you learn about Chaden's skills, projects, experience, education, certifications, or contact information. What specific area would you like to explore?";

    setMessages((prev) => [...prev, { sender: "assistant", text: reply, time }]);
  };

  return (
    <div className="w-full flex justify-center px-2">
      <div className="bg-[#0f172a] rounded-2xl shadow-lg flex flex-col p-4 sm:p-6 md:p-8"
           style={{ width: '100%', maxWidth: 1200 , height: '500px',}}>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
          🤖 Chaden’s AI Assistant
        </h2>

        <div className="overflow-y-auto p-3 sm:p-4 md:p-6 rounded-lg bg-[#1e293b]"
             style={{ height: '300px', maxHeight: '60vh', minHeight: '200px' }}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.sender === "assistant" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-[80%] p-2 sm:p-3 md:p-4 rounded-xl break-words ${
                msg.sender === "assistant"
                  ? "bg-[#334155] text-green-300 self-start"
                  : "bg-[#475569] text-blue-300 self-end ml-auto"
              }`}
            >
              <p className="text-xs sm:text-sm md:text-base">{msg.text}</p>
              <span className="text-[9px] sm:text-xs text-gray-400 block mt-1">
                {msg.time}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask me about Chaden..."
            className="flex-1 rounded-l-lg p-2 sm:p-3 text-sm sm:text-base outline-none"
          />
          <button
            onClick={() => sendMessage(input)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 sm:p-3 rounded-r-lg text-sm sm:text-base transition"
          >
            Send
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Skills", "Projects", "Experience", "Education", "Certifications", "Contact"].map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="bg-[#334155] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-green-500 text-xs sm:text-sm transition"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
