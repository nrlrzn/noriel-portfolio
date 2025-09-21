function About() {
  return (
    <section className="about" id="about">
      <div className="about-section">
        <h1>About Me</h1>
        <div className="underline"></div>

        <div className="about-content">
          <img src="src/assets/about-avatar.png" alt="" className="about-img" />

          <div className="about-text">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
              gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc
              bibendum sed. Donec tincidunt tellus sed libero ultricies, eu
              semper enim molestie. Etiam lorem quam, tincidunt nec malesuada
              eu, interdum nec leo.
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
