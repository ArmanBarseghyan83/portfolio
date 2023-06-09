import React from "react";
import contacts from "./data";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className="tel">
        <div>
          <FaPhoneAlt />
        </div>
        <a href="tel:+18182387558"> (818) 238-7558</a>
      </div>
      <div className="container contact-container">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
      <div className="footer-copyright">
        <small>ARMAN BARSEGHYAN</small>
      </div>
    </section>
  );
};

export default Contact;
