export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Noriel Razon</h2>
          <p>© 2025 Noriel Razon. All rights reserved.</p>
          <p className="credits">Built with React & SCSS</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            Email:
            <a href="mailto:youremail@example.com"> razonjannoriel@gmail.com</a>
          </p>
          <p>Location: Lemery, Philippines</p>
          <div className="social-links">
            <a
              href="https://github.com/nrlrzn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jan-noriel-razon-90aa04375/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/razonnoriel_//"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-cta">
        <p>Let's work together on your next project!</p>
      </div>
    </footer>
  );
}
