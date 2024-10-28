import "./Contact.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";
import { useRef } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const email = "jasin.tairaidrissi@gmail.com";
  const phone = "+31646327292";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, // Your service ID from the .env file
        process.env.REACT_APP_TEMPLATE_ID, // Your template ID from the .env file
        form.current,
        process.env.REACT_APP_PUBLIC_KEY, // Your public key from the .env file
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <div className="hero-secondPage">
            <section className="grid-two-column">
              <div className="grid-child">
                <h1>Contact</h1>
                <div className="button-wrapper column">
                  <Button
                    variant="outline"
                    type="button"
                    hasArrow={false}
                    href={`mailto:${email}`}
                  >
                    jasin.tairaidrissi@gmail.com
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    hasArrow={false}
                    href={`tel:${phone}`}
                  >
                    +31(0) 6 46 327292
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    hasArrow={false}
                    href="https://www.linkedin.com/in/jasin-tairaidrissi-a807353/"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
              <div className="grid-child">
                <div>
                    <form
                    ref={form}
                      onSubmit={handleSubmit}
                      className="contact-form"
                      name="contact"
                      method="POST"
                    >
                      <input type="hidden" name="form-name" value="contact" />

                      <input
                        type="hidden"
                        name="subject"
                        value="Email from Portfolio website"
                      />
                      <input type="hidden" name="bot-field" />

                      <p className="quote">
                        Let&apos;s work together and make something that matters
                      </p>
                      <label>
                        Name
                        <input
                          type="text"
                          name="name"
                        />
                      </label>
                      <label>
                        Email
                        <input
                          type="email"
                          name="email"
                        />
                      </label>
                      <label>
                        Message
                        <textarea
                          name="message"
                        ></textarea>
                      </label>
                      <div className="button-wrapper">
                        <Button text="Submit" type="submit" variant="white">
                          Submit
                        </Button>
                      </div>
                    </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer></Footer>
      </article>
    </main>
  );
}

export default Contact;
