import React from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

interface SidebarProps {
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'career', label: 'Career Timeline' },
    { id: 'blog', label: 'Technical Blog' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'learning', label: 'Learning Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <Button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      <nav className={`game-sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => setActivePage(item.id)} className="nav-item">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;