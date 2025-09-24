function About() {
  return (
    <section className="about" id="about">
      <div className="about-section">
        <h1>About Me</h1>
        <div className="underline"></div>

        <div className="about-content">
          <img
            src="/about-avatar.png"
            alt="About avatar"
            className="about-img"
          />

          <div className="about-text">
            <p className="paragraph">
              Hi, I'm Noriel! I like making apps and websites that people can
              use every day. I enjoy learning new things and solving problems.
              My dream is to create fun, helpful tools that make life easier for
              everyone who uses them.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <strong>Email:</strong> razonjannoriel@gmail.com
              </div>
              <div className="info-item">
                <strong>Nationality:</strong> Flipino
              </div>
              <div className="info-item">
                <strong>Location:</strong> Batangas, Philippines
              </div>
              <div className="info-item">
                <strong>Education:</strong> Lemery, Colleges
              </div>
              <div className="info-item">
                <strong>Birthdate:</strong> 22nd July, 2002
              </div>
              <div className="info-item">
                <strong>Degree:</strong> Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
