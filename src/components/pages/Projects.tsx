import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
