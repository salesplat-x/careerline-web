import { Button } from '../Button';
import logo from '../../assests/careerLine.svg';
import './Navbar.scss';
import { useTheme } from '../../hooks/useTheme';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getIcon = () => {
    if (theme === 'light') return <MdLightMode size={24} />;
    return <MdDarkMode size={24} />;
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        <img src={logo} alt="careerline logo" />
      </div>
      <div className="nav-actions">
        <Button variant="primary" onClick={() => navigate('/question')}>
          Take A Test
        </Button>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {getIcon()}
        </button>
      </div>
    </nav>
  );
};
