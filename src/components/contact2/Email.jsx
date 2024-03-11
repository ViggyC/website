import React, { useState, useRef } from "react";
import "./Email.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

import axios from "axios";

const Email = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const form = useRef(null);
  const [formData, setFormData] = useState(initialFormData);

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(
        "https://vigneshchandrasekhar.fly.dev/send_mail",
        formData
      );
      console.log(response);
      alert("Email sent, I will get back to you soon :)");
      setFormData(initialFormData); // Reset the form fields
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong");
    } finally {
      e.target.reset();
      form.current.reset();
      setSubmitting(false);
    }
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
        <form ref={form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              placeholder="What's up?"
              onChange={handleChange}
              required
            />
          </label>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
