import { useEffect, useState } from 'react';
import { Button } from '../Button';
import logo from '../../../public/careerLine.svg';
import './Navbar.scss';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // adjust scroll threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        <img src={logo} alt="careerline logo" />
      </div>
      <div>
        <Button variant="primary">Take A Test</Button>
      </div>
    </nav>
  );
};
