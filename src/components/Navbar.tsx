import { sections, socials } from '../data/navLinks';

const linkClass = 'text-gray-300 hover:text-[#7BB4E3] transition-colors';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1A1B3D] py-4 px-4 sm:px-8 flex justify-between items-center">
      <div className="flex items-center gap-4 sm:gap-8">
        <h1 className="hidden md:block text-lg sm:text-xl font-bold text-white">Paulina Méndez</h1>
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className={linkClass}>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        {socials.map(({ href, icon: Icon, size, label, external, button }) => (
          <a
            key={href}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={
              button
                ? `${linkClass} flex items-center gap-1 border border-gray-600 px-2 py-1 rounded-md hover:bg-gray-700`
                : linkClass
            }
          >
            <Icon size={size} />
            {label && <span className="inline text-sm">{label}</span>}
          </a>
        ))}
      </div>
    </nav>
  );
};
