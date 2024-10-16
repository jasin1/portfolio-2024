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
                    Mi a pellentesque proin laoreet risus vulputate quam erat
                    in. Eget orci ullamcorper ut nunc a eget lacus cum. Ac
                    vivamus viverra aliquam duis eu lectus dapibus pulvinar
                    vitae. Pellentesque auctor odio quis venenatis feugiat
                    blandit tortor. Integer purus amet elit odio pharetra
                    commodo. Magnis pharetra odio volutpat. Mi a pellentesque
                    proin laoreet risus vulputate quam erat in. Eget orci
                    ullamcorper ut nunc a eget lacus cum. Ac vivamus viverra
                    aliquam duis eu lectus dapibus pulvinar vitae. <br />
                    Pellentesque auctor odio quis venenatis feugiat blandit
                    tortor. Integer purus amet elit odio pharetra commodo.
                    Magnis pharetra odio volutpat . Mi a pellentesque proin
                    laoreet risus vulputate quam erat in. Eget orci ullamcorper
                    ut nunc a eget lacus cum. Ac vivamus viverra aliquam duis eu
                    lectus dapibus pulvinar vitae. Pellentesque auctor odio quis
                    venenatis feugiat blandit tortor. Integer purus amet elit
                    odio pharetra commodo. Magnis pharetra odio volutpat .
                  </p>
                </div>
                <div className="about-txt">
                  <h2>My Skills</h2>
                  <p>
                    Mi a pellentesque proin laoreet risus vulputate quam erat
                    in. Eget orci ullamcorper ut nunc a eget lacus cum. Ac
                    vivamus viverra aliquam duis eu lectus dapibus pulvinar
                    vitae. Pellentesque auctor odio quis venenatis feugiat
                    blandit tortor. Integer purus amet elit odio pharetra
                    commodo. Magnis pharetra odio volutpat. Mi a pellentesque
                    proin laoreet risus vulputate quam erat in. Eget orci
                    ullamcorper ut nunc a eget lacus cum. Ac vivamus viverra
                    aliquam duis eu lectus dapibus pulvinar vitae. Pellentesque
                    auctor odio quis venenatis feugiat blandit tortor. Integer
                    purus amet elit odio pharetra commodo. Magnis pharetra odio
                    volutpat . Mi a pellentesque proin laoreet risus vulputate
                    quam erat in. Eget orci ullamcorper ut nunc a eget lacus
                    cum. Ac vivamus viverra aliquam duis eu lectus dapibus
                    pulvinar
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="resources">
              <div className="about-txt">
                <h2>Additional Resources</h2>
                <p>
                  Mi a pellentesque proin laoreet risus vulputate quam erat in.
                  Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus
                  viverra aliquam.
                </p>
              </div>
              <div className="button-wrapper">
                <Button variant="white" type="button" hasArrow={true}>
                  Curriculum Vitae
                </Button>
                <Button variant="white" type="button" hasArrow={true} href="https://www.linkedin.com/in/jasin-tairaidrissi-a807353/">
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
