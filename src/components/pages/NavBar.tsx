import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  ToolOutlined,
  MailOutlined,
} from '@ant-design/icons';

const items = [
  {
    label: <a href="#hero">Home</a>,
    key: 'home',
    icon: <HomeOutlined className="icon" />,
  },
  {
    label: <a href="#about">About</a>,
    key: 'about',
    icon: <UserOutlined className="icon" />,
  },
  {
    label: <a href="#projects">Projects</a>,
    key: 'projects',
    icon: <AppstoreOutlined className="icon" />,
  },
  {
    label: <a href="#skills">Skills</a>,
    key: 'skills',
    icon: <ToolOutlined className="icon" />,
  },
  {
    label: <a href="#contact">Contact</a>,
    key: 'contact',
    icon: <MailOutlined className="icon" />,
  },
];

export default function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="navbar-container">
      <header className={`navbar ${showNav ? 'navbar-show' : 'navbar-hide'}`}>
        <div className="navbar-logo">
          <img src="/Noriel_Logo.png" alt="Noriel Logo" className="logo-img" />
        </div>

        <Menu
          mode="horizontal"
          items={items}
          className="navbar-menu"
          selectable={false}
        />
      </header>
    </div>
  );
}
