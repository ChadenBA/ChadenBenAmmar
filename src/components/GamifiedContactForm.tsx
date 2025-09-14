import React, { useState } from "react";

const GamifiedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Complete the slider challenge to send the message!");
      return;
    }
    console.log(formData);
    alert("Message sent! 🎉 (mock)");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsVerified(false);
  };

  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-gray-300 text-center mb-8">
          Complete the challenge below to send me a message!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            required
          />

          {/* Gamified slider challenge */}
          <div className="mt-4">
            <label className="block mb-2 text-gray-200">Slide to Verify</label>
            <div className="relative w-full h-12 bg-white/10 rounded-xl border border-white/20 dark:border-gray-700/30">
              <div
                className={`absolute top-0 left-0 h-12 w-12 bg-blue-500 rounded-xl cursor-pointer transition-all duration-200 ${
                  isVerified ? "left-[calc(100%-3rem)]" : "left-0"
                }`}
                draggable={!isVerified}
                onDragEnd={() => setIsVerified(true)}
              />
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-300 pointer-events-none">
                {isVerified ? "Verified ✅" : "Drag me"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isVerified}
            className={`mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl py-3 px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GamifiedContactForm;
