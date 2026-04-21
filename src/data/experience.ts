export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

export const experience: ExperienceItem[] = [
  {
    date: 'Jun. 2025 - Present',
    title: 'Database Support Intern',
    company: 'Oracle',
    description: [
      'Supported the Customer Support team, ensuring continuity for mission-critical systems used by international clients.',
      'Co-developed a prompt library system in Oracle APEX that streamlined AI system upgrade planning, resulting in faster scoping time.',
      'Restructured and indexed a library of internal technical documents, improving knowledge retrieval speed.',
    ],
  },
];
