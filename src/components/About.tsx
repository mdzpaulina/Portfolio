import { skills } from '../data/skills';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">About me</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-gray-400 text-xl tracking-wide font-light">
          <p>
            I'm currently a <b>Software Engineer Intern</b> at{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.oracle.com" className="text-[#7BB4E3] font-bold">Oracle</a>, where I contribute to the Database Support team. At the same time i'm pursuing my <b>Computer Science</b> degree at{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://tec.mx" className="text-[#7BB4E3] font-bold">Tecnológico de Monterrey</a>.
          </p>
          <br />
          <p>Here are some of the technologies and tools I have worked with:</p>
          <div>
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center mb-2 text-gray-400 before:content-[''] before:inline-block before:w-5 before:h-5 before:mr-3 before:bg-[url('/star.png')] before:bg-contain before:bg-no-repeat"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center">
          <img src="./paulina.jpeg" alt="Paulina Mendez" className="object-cover h-64 w-100 md:h-80 md:w-120 rounded-lg" />
        </div>
      </div>
    </section>
  );
};
