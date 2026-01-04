import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components';

interface NavbarProps {
  navTextColor: string;
}

export const MainLayout = ({ navTextColor }: NavbarProps) => (
  <div>
    <Navbar navTextColor={navTextColor} />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
