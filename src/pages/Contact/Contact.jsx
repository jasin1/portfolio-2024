import "./Contact.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";
import { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
// import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const email = "jasin.tairaidrissi@gmail.com";
  const phone = "+31646327292";
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xanyqpza", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: form.current.name.value,
        email: form.current.email.value,
        message: form.current.message.value,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      console.log("SUCCESS!");
      form.current.reset(); // Reset the form after successful submission
    } else {
      console.error("Form submission failed", response);
    }
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

                   {!submitted ? ( <form
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
                    </form>):(
                          <div className="thank-you-message">
                          <h5>Thank you for your message!</h5>
                          <p>I will get back to you soon.</p>
                        </div>
                    )}
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
