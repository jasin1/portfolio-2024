import "./Contact.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";

function Contact() {
  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <div className="hero-secondPage">
            <section className="grid-two-column">
              <div className="grid-child">
                <h1>Contact</h1>
                <div className="button-wrapper">
                  <Button variant="outline" type="button" hasArrow={false}>
                    jasin.tairaidrissi@gmail.com
                  </Button>
                  <Button variant="outline" type="button" hasArrow={false}>
                    +31(0) 6 46 327292
                  </Button>
                </div>
              </div>
              <div className="grid-child">
                <p className="quote">Let’s work together and make 
                something that matters</p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Contact;
