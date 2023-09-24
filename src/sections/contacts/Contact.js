import React from "react";
import contacts from "./data";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact">
      <h2>Contact Me</h2>
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
        <p>ARMAN BARSEGHYAN &copy; {currentYear}</p>
      </div>
    </section>
  );
};

export default Contact;
