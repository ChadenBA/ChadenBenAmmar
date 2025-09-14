import React, { useState } from "react";

const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log the data, you can connect to an email API or backend
    console.log(formData);
    alert("Message sent! (mock)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">
            I’m always open to discuss new projects, ideas, or opportunities. Reach me via email, phone, or follow me on social media.
          </p>

          {/* Email & Phone */}
          <div className="flex flex-col gap-2 text-gray-200">
            <p><strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 234 567 890</a></p>
          </div>

          {/* Follow Me */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 border border-white/20 dark:border-gray-700/30 rounded-xl p-3 transition-all duration-300">
              LinkedIn
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 border border-white/20 dark:border-gray-700/30 rounded-xl p-3 transition-all duration-300">
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        
        </div>
    </section>
  );
};

export default GetInTouchSection;
