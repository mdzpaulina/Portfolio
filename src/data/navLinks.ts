import { FiMail, FiGithub, FiLinkedin, FiEdit } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export const sections = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

export interface SocialLink {
  href: string;
  icon: IconType;
  size: number;
  label?: string;
  external?: boolean;
  button?: boolean;
}

export const socials: SocialLink[] = [
  { href: 'mailto:mdzlopezp@gmail.com', icon: FiMail, size: 20 },
  { href: 'https://github.com/mdzpaulina', icon: FiGithub, size: 22, external: true },
  { href: 'https://www.linkedin.com/in/paulina-mdz/', icon: FiLinkedin, size: 20, external: true },
  { href: '/Paulina_Méndez_Resume.pdf', icon: FiEdit, size: 16, external: true, label: 'Resume', button: true },
];
