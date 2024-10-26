import "./Contact.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";
import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";

function Contact() {
  const email = "jasin.tairaidrissi@gmail.com";
  const phone = "+31646327292";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form");
      });
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
                  {submitted ? (
                    <div className="thank-you-message">
                      <h5>Thank you for reaching out!</h5>
                      <p>I&apos;ll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="contact-form"
                      name="contact"
                      method="POST"
                      netlify
                      data-netlify="true"
                      netlify-honeypot="bot-field" 
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
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </label>     
                      <label>
                        Email
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Message
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </label>
                      <div className="button-wrapper">
                        <Button text="Submit" type="submit" variant="white">
                          Submit
                        </Button>
                      </div>
                    </form>
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
