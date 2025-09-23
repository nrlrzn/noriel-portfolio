import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  ToolOutlined,
  MailOutlined,
  MenuOutlined,
  CloseOutlined,
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
  const [openMenu, setOpenMenu] = useState(false);

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
        <div className="burger" onClick={() => setOpenMenu(true)}>
          <MenuOutlined style={{ fontSize: '1.5rem' }} />
        </div>
      </header>

      <div className={`mobile-menu ${openMenu ? 'open' : ''}`}>
        <div className="close-btn" onClick={() => setOpenMenu(false)}>
          <CloseOutlined style={{ fontSize: '1.5rem' }} />
        </div>

        {items.map((item) => (
          <a
            key={item.key}
            href={item.label.props.href}
            onClick={() => setOpenMenu(false)}
          >
            {item.icon} {item.label.props.children}
          </a>
        ))}
      </div>
    </div>
  );
}
