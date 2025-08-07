// components/HomeHero.tsx
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeHero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 py-12 bg-[#0a192f] text-white">
      {/* Left */}
      <div className="flex-1 space-y-4" >
        <h1 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Chaden </span> Ben Ammar
        </h1>
        <p className="text-lg leading-relaxed max-w-xl">
  👋 Hi, I'm Chaden ben Ammar — an Engineering student specializing in Teleinformatics.<br />
  Passionate about Software Engineering, DevOps, DevSecOps, and Cybersecurity.<br />
  Always exploring and learning in the world of secure software development.
</p>

        {/* Social Buttons */}
        <div className="flex space-x-4 mt-4">
  <a href="https://github.com/ChadenBA" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-2xl hover:text-blue-400 cursor-pointer" />
  </a>
  
  <a href="https://linkedin.com/in/chaden-ben-ammar" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer" />
  </a>

</div>


        {/* Contact Buttons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="mailto:youremail@example.com"
            className="flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <HiOutlineMail className="mr-2" /> Contact Me
          </a>
          <a
            href="tel:+21623566503"
            className="flex items-center bg-[#1f2937] text-white px-4 py-2 rounded-lg shadow-md"
          >
            <BsPhone className="mr-2" /> (+216) 99590388
          </a>
        </div>

       
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <div className="rounded-full border-4 border-blue-500 p-1">
          <Image
            src="/images/megithub.png"
            alt="Chaden Ben Ammar"
            width={300}
            height={300}
            className="rounded-full grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
