import "./About.css";
import Header from "../../components/Header/Header.jsx";
import meBig from "../../assets/me-big.png";
import Button from "../../components/Button/Button.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";

function About() {
  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <section className="hero-secondPage">
            <h1>About Me</h1>
          </section>
          <section>
            <div className="about-content-wrapper">
              <div className="about-img-wrapper">
                <img src={meBig} alt="Picture of me" />
              </div>
              <div className="about-txt-container">
                <div className="about-txt">
                  <p>
                    I&apos;m a Frontend Developer and Designer based in
                    Amsterdam, with over 15 years of experience in creating
                    visually appealing and user-friendly digital solutions.
                    Recently, I transitioned my focus to frontend development,
                    specializing in React after successfully completing a
                    bootcamp at{" "}
                    <a
                      href="https://www.novi.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hogeschool NOVI
                    </a>{" "}
                    in Utrecht. My extensive background in UI/UX design allows
                    me to bridge the gap between design and development,
                    ensuring that both functionality and aesthetics are
                    seamlessly integrated.
                  </p>

                  <p>
                    Throughout my career, I&apos;ve worked on a variety of
                    projects, collaborating effectively within teams to deliver
                    high-quality digital products. I am dedicated to continuous
                    learning and personal growth, always striving to create the
                    best possible solutions. I&apos;m open to new challenges and
                    collaborations, so feel free to reach out if you&apos;re
                    looking for a passionate developer with a keen eye for
                    design.
                  </p>
                </div>
                <div className="about-txt">
                  <h2>My Skills</h2>
                  <p className="small-margin-bottom">
                    I possess a diverse set of skills that enable me to create
                    engaging and user-friendly digital experiences:
                  </p>

                  <ul className="skills-list">
                    <li>
                      <strong>Frontend Development:</strong> Proficient in{" "}
                      <strong>React</strong>, <strong>JavaScript</strong>,{" "}
                      <strong>HTML</strong>, and <strong>CSS</strong>.
                    </li>
                    <li>
                      <strong>UI/UX Design:</strong> Extensive experience in
                      designing intuitive interfaces.
                    </li>
                    <li>
                      <strong>Collaboration:</strong> Proven ability to work
                      effectively within cross-functional teams.
                    </li>
                    <li>
                      <strong>Continuous Learning:</strong> Committed to staying
                      current with industry trends and technologies.
                    </li>
                    <li>
                      <strong>Problem Solving:</strong> Strong analytical skills
                      with a knack for identifying challenges.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="resources">
              <div className="about-txt">
                <h2>Additional Resources</h2>
                {/* <p>
                  Mi a pellentesque proin laoreet risus vulputate quam erat in.
                  Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus
                  viverra aliquam.
                </p> */}
              </div>
              <div className="button-wrapper">
                <Button
                  variant="white"
                  type="button"
                  hasArrow={true}
                  href="https://jasinidrissi.com/assets/cv.pdf"
                  download="Jasin-Tairaidrissi-CV.pdf"
                >
                  Download My CV
                </Button>
                <Button
                  variant="white"
                  type="button"
                  hasArrow={true}
                  href="https://www.linkedin.com/in/jasin-tairaidrissi-a807353/"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </section>
        </div>
        <CallToAction></CallToAction>
        <Footer></Footer>
      </article>
    </main>
  );
}

export default About;
