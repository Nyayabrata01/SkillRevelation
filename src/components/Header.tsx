import { useState, useEffect } from 'react';
import { Menu, X, Laptop, BookOpen, Users, GraduationCap } from 'lucide-react';

interface NavLink {
  name: string;
  path: string;
  icon: JSX.Element;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links: NavLink[] = [
    { name: 'School Management', path: '#school', icon: <BookOpen size={18} /> },
    { name: 'College Management', path: '#college', icon: <GraduationCap size={18} /> },
    { name: 'Employee Management', path: '#employee', icon: <Users size={18} /> },
    { name: 'Skill Development', path: '#skills', icon: <Laptop size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
              <Laptop size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl md:text-2xl text-primary-800">
              SkillRevelation
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.path}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 font-medium transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-medium">
            <nav className="flex flex-col space-y-4 px-6">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.path}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
              <a 
                href="#contact" 
                className="flex justify-center px-5 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;