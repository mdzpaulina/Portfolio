// src/components/Experience.jsx
import "./Experience.css";

const experienceData = [
  {
    date: 'Jun. 2025 - Present',
    title: 'Database Support Intern',
    company: 'Oracle',
    description: [
      'Supported the Customer Support team, ensuring continuity for mission-critical systems used by international clients.',
      'Co-developed a prompt library system in Oracle APEX that streamlined AI system upgrade planning, resulting in faster scoping time.',
      'Restructured and indexed a library of internal technical documents, improving knowledge retrieval speed.'
    ]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-white mb-8">Experience</h2> 

      <div className="timeline-container">
        <div className="flex flex-col items-center"> 
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-box flex-1"> 
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                  <span> @ </span><span className="text-[#7BB4E3]"> {item.company}</span>
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