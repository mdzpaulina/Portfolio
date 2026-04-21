import { experience } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>

      <div className="relative pl-4 md:pl-8">
        <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-[#7BB4E3]" />
        <div className="flex flex-col items-center">
          {experience.map((item, index) => (
            <div key={index} className="relative mb-8 w-full">
              <div className="cursor-zoom-in bg-[#3A3B5E] hover:bg-[#50526E] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition max-w-7xl ml-auto">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                  <span> @ </span>
                  <span className="text-[#7BB4E3]"> {item.company}</span>
                </h3>

                <p className="text-white font-semibold mb-2">{item.date}</p>

                <ul className="list-disc pl-5 space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i} className="text-white text-md tracking-wide font-light">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
