import React, { useState, useRef, useEffect } from "react";

const TerminalPortfolio: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, { action: () => void }> = {
    "show-projects": {
      action: () => {
        addHistory(
          "Projects:\n- SmartLearn: Adaptive e-learning platform\n- Gamified Contact Form: Fun UX experience\n- Hack2Win Challenge: Capture the flag adventure"
        );
      },
    },
    "show-certifications": {
      action: () => {
        addHistory(
          "Certifications:\n- Security Blue Team - Bash\n- LPIC-1 Prep - Linux\n- TryHackMe Adventurer Badge"
        );
      },
    },
    "run-scan": {
      action: () => {
        addHistory(
          "Scanning… Found 0 critical bugs. Just kidding, one hidden in my breakfast cereal 🍳\nDocker containers deployed successfully."
        );
      },
    },
    "whoami": {
      action: () => {
        addHistory(
          "Name: Chaden\nRole: DevOps & Security Enthusiast\nMotto: “Automate everything, secure everything”"
        );
      },
    },
    "view-logs": {
      action: () => {
        addHistory(
          "2025-09-14 22:01 [SUCCESS] Docker container deployed ✅\n2025-09-14 22:05 [ATTACK BLOCKED] SSH brute-force attempt ❌\n2025-09-14 22:10 [INFO] Backup completed ✅"
        );
      },
    },
    help: {
      action: () => {
        addHistory(
          "Commands:\nshow-projects, show-certifications, run-scan, whoami, view-logs, help, sudo hire-me, contact-me"
        );
      },
    },
    "sudo hire-me": {
      action: () => {
        addHistory(
          "🎉 Easter egg found! Type 'contact-me' to send me a message!"
        );
      },
    },
    "contact-me": {
      action: () => {
        addHistory("Email: chedenbenammar@gmail.com | Phone: +21699590388");
      },
    },
  };

  const addHistory = (text: string) => {
    setHistory((prev) => [...prev, text]);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    addHistory(`$ ${input}`);
    const cmd = input.trim().toLowerCase();
    if (commands[cmd]) {
      commands[cmd].action();
    } else {
      addHistory(`Command not found: ${input}. Type 'help' for available commands.`);
    }

    setInput("");
  };

  useEffect(() => {
    if (showTerminal) {
      setHistory([]);
      const intro = [
        "Initializing terminal...",
        "Welcome, Chaden! 👋",
        "Role: DevOps & Security Enthusiast",
        "Motto: “Automate everything, secure everything”",
        "Type 'help' to see available commands."
      ];
      intro.forEach((line, i) => {
        setTimeout(() => addHistory(line), i * 600);
      });

      setTimeout(() => inputRef.current?.focus(), intro.length * 600);
    }
  }, [showTerminal]);

  return (
    <div className="flex flex-col items-center my-12 px-4">
      {!showTerminal && (
        <button
          onClick={() => setShowTerminal(true)}
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
        >
          Open Hacker Terminal
        </button>
      )}

      {showTerminal && (
        <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-xl w-full max-w-4xl mt-6">
          <div className="h-96 overflow-y-auto mb-4 space-y-1">
            {history.map((line, index) => (
              <p key={index} className="whitespace-pre-wrap break-words">
                {line}
              </p>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center border-t border-green-700 pt-2">
            <span className="mr-2">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-black text-green-400 focus:outline-none flex-1"
              placeholder="Type a command..."
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default TerminalPortfolio;
