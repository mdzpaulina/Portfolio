// src/components/About.jsx
import './About.css';

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">About me</h2>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
        <div className="text-gray-400 text-lg sm:text-xl tracking-wide font-light order-2 md:order-1"> 
          <p>
            I&apos;m currently a <b>Software Engineer Intern</b> at <a target="_blank" rel="noopener noreferrer" href="https://www.oracle.com" className="text-[#7BB4E3] font-bold">Oracle</a>, where I contribute to the Database Support team. At the same time i&apos;m pursuing my <b>Computer Science</b> degree at <a target="_blank" rel="noopener noreferrer"href="https://tec.mx" className="text-[#7BB4E3] font-bold">Tecnológico de Monterrey</a>.
          </p>
          <br />
          <p>
            Here are some of the technologies and tools I have worked with:          
          </p>
          <div>
            <div className="custom-list-item text-gray-400">Python</div>
            <div className="custom-list-item text-gray-400">JavaScript</div>
            <div className="custom-list-item text-gray-400">C++</div>
            <div className="custom-list-item text-gray-400">React</div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center order-1 md:order-2"> 
            <img src="./paulina.jpeg" alt="Paulina Mendez" className="object-cover h-60 sm:h-80 w-48 sm:w-64 md:w-80 rounded-md" />
        </div>
      </div>
    </section>
  );
};
