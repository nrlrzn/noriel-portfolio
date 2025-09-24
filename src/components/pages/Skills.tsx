import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiPython, SiAdobephotoshop } from 'react-icons/si';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-section">
        <div>
          <h1>Skills</h1>
          <div className="underline"></div>

          <div className="skills-content">
            <img
              src="/Noriel_Logo.png"
              alt="Noriel Logo"
              className="skills-img"
            />

            <div className="skills-text">
              <p className="paragraph">
                I enjoy learning new skills like coding, designing, and building
                apps. Each project teaches me something new. My skills keep
                growing because I work hard, ask questions, and practice often.
                With these skills, I can build tools that make life easier. Here
                are the software tools I use to practice and grow my skills:
              </p>
            </div>
          </div>

          <div className="skills-item-row">
            <div className="skills-set">
              <div className="skills-item">
                <FaReact size={40} color="#61DBFB" />
                <p className="item">React</p>
              </div>
              <div className="skills-item">
                <SiTypescript size={40} color="#3178C6" />
                <p className="item">Typescript</p>
              </div>
              <div className="skills-item">
                <SiPython size={40} color="#3776AB" />
                <p className="item">Python</p>
              </div>
              <div className="skills-item">
                <SiAdobephotoshop size={40} color="#3776AB" />
                <p className="item">Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
