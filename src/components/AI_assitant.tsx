


const knowledgeBase: Record<string, string> = {
    greeting: "Hi! I'm Chaden's AI assistant 🤖. I can help you learn about his skills, projects, experience, certifications, or contact information. What would you like to know?",
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



import React, { useState } from "react";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "assistant";
  text: string;
  time: string;
}

const AIAssistant: React.FC = () => {
       
  const [messages, setMessages] = useState<Message[]>([
    { sender: "assistant", text: knowledgeBase.greeting, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setMessages((prev) => [...prev, { sender: "user", text, time }]);
    setInput("");

    const key = text.toLowerCase().trim();
    const reply =
      knowledgeBase[key as keyof typeof knowledgeBase] ||
      "That's an interesting question! I can help you learn about Chaden's skills, projects, experience, education, certifications, or contact information. What specific area would you like to explore?";

    setMessages((prev) => [...prev, { sender: "assistant", text: reply, time }]);
  };

  return (
    <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-white mb-4 text-center">🤖 Chaden’s AI Assistant</h2>

      <div className="h-72 overflow-y-auto bg-[#1e293b] p-4 rounded-lg text-white mb-4 space-y-3">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.sender === "assistant" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-[80%] p-3 rounded-xl ${
              msg.sender === "assistant"
                ? "bg-[#334155] text-green-300 self-start"
                : "bg-[#475569] text-blue-300 self-end ml-auto"
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-400 block mt-1">{msg.time}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          className="flex-1 p-2 rounded-l-lg outline-none text-black"
          placeholder="Ask me about Chaden..."
        />
        <button
          onClick={() => sendMessage(input)}
          className="bg-green-500 px-4 rounded-r-lg text-white font-bold hover:bg-green-600"
        >
          Send
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Skills", "Projects", "Experience", "Education", "Certifications", "Contact"].map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            className="bg-[#334155] text-white px-3 py-1 rounded-lg hover:bg-green-500 transition"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIAssistant;
