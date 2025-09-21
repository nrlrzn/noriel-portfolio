import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src="/hero-avatar.png" alt="Hero avatar" className="hero-img" />

        <div className="hero-text">
          <h1>
            Noriel <span>Razon</span>
          </h1>
          <p>Front-End Developer</p>

          <div className="hero-button">
            <Button type="primary" className="btn-primary">
              <a href="src/assets/CV - Noriel Razon.pdf" download>
                Download CV
              </a>
            </Button>

            <Button
              type="primary"
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Hire me
            </Button>
          </div>
        </div>
      </div>

      <div className="arrow-down" onClick={() => scrollToSection('about')}>
        <DownOutlined />
      </div>
    </section>
  );
}
