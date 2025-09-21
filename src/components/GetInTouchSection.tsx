import { useTheme } from "@mui/material";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(false);

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return alert("Complete the slider challenge to send the message!");
    console.log(formData);
    alert("Message sent! 🎉 (mock)");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsVerified(false);
  };

  const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-black";
  const inputBg = isDark ? "bg-white/10 text-white" : "bg-white text-black";
  const borderColor = isDark ? "border-white/20" : "border-gray-300";

  return (
    <section className={`${bgColor} ${textColor} py-16 px-6 md:px-12`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
            I’m always open to discuss new projects, ideas, or opportunities. Reach me via email, phone, or follow me on social media.
          </p>

          {/* Email & Phone */}
          <div className={`flex flex-col gap-2 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">
                your.email@example.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                +1 234 567 890
              </a>
            </p>
          </div>

          {/* Follow Me */}
          <div className="flex gap-4 mt-4">
            <a href="#" className={`${bgColor} hover:bg-opacity-80 border ${borderColor} rounded-xl p-3 transition-all duration-300`}>LinkedIn</a>
            <a href="#" className={`${bgColor} hover:bg-opacity-80 border ${borderColor} rounded-xl p-3 transition-all duration-300`}>GitHub</a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {["name", "email", "subject"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className={`w-full p-3 rounded-xl ${inputBg} border ${borderColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                required
              />
            ))}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className={`w-full p-3 rounded-xl ${inputBg} border ${borderColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
              required
            />

            {/* Slider */}
            <div className="mt-4">
              <label className="block mb-2 text-gray-300">Slide to Verify</label>
              <div className={`relative w-full h-12 rounded-xl border ${borderColor} ${inputBg}`}>
                <div
                  className={`absolute top-0 left-0 h-12 w-12 bg-blue-500 rounded-xl cursor-pointer transition-all duration-200 ${isVerified ? "left-[calc(100%-3rem)]" : "left-0"}`}
                  draggable={!isVerified}
                  onDragEnd={() => setIsVerified(true)}
                />
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                  {isVerified ? "Verified " : "Drag me"}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isVerified}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl py-3 px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
