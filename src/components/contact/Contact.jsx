import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent, I will get back to you soon :)");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact-icon" />
            <h4>Email</h4>
            <h5>vigneshc5723@gmail.com</h5>
            <a
              href="mailto:vigneshc5723@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className="contact-icon" />
            <h4>Whats App</h4>
            <h5>7208837251</h5>
            <a
              href="https://api.whatsapp.com/send?phone=17208837251"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="text" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="What's up?"
            required
          ></textarea>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
