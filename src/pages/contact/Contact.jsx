import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service-57xz7l2";
      const templateId = "template-4fk5mag";
      const userId = "tu-0hbMx3lSgm8Ulh";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
      <section id="contact">
        <h1 className="contact-us text-center pb-3">Contact Us</h1>

        <Container className="contact-container">
          <div className="contact-form">
            <input
              className="name mb-1"
              type="text"
              placeholder="First & last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="email mb-1"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="message mb-1"
              placeholder="Please enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="contact-submit p-2" onClick={submit}>
              Submit
            </button>
            <span className="email-sent fs-5 fw-bold">
              {emailSent
                ? "Thank you for your message, we'll be in touch!"
                : ""}
            </span>
          </div>
        </Container>
      </section>
  );
};

export default Contact;