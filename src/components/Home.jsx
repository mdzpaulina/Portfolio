// src/components/Hero.jsx
import styles from './Home.module.css';
import { FiMail } from 'react-icons/fi';
import { ScrollArrow } from './ScrollArrow';

export const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen -mt-20 px-4">
      
      <div className={styles.container}>
        <h1 className={`${styles.text} text-black font-bold text-3xl sm:text-4xl md:text-6xl`}>
            Hi! I'm <span className="text-[#E8A4C4]">Paulina.</span>
        </h1>
      </div>

      <div className="max-w-xl mt-6"> 
        <p className="text-gray-700 tracking-wide font-light mb-8">
          I'm a Computer Science Student from Mexico. I enjoy building efficient and <span className="text-[#E8A4C4] italic">scalable</span> technological solutions, from complex algorithms to interactive web applications. My goal is to contribute to high-impact projects that solve real-world problems through technology.
        </p>
        
        <a 
          href="mailto:mdzlopezp@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8A4C4] text-white font-semibold rounded-full hover:bg-[#d88bb6] transition-colors duration-300"
        >
          <FiMail />
          Contact Me
        </a>
      </div>

      <ScrollArrow />

    </section>
  );
};

