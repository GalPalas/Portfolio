import React, { useEffect } from "react";
import sr from "./../services/ScrollReveal";
import sendEmail from "./../services/SendEmailService";

import "./Contact.css";

function Contact() {
  useEffect(() => {
    /*SCROLL CONTACT*/
    sr.reveal(".contact__input", { interval: 200 });
  });

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form onSubmit={sendEmail} className="contact__form">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="contact__input"
            ></input>
            <input
              name="email"
              type="mail"
              placeholder="Email"
              className="contact__input"
            ></input>
            <textarea
              name="message"
              id=""
              placeholder="Message"
              cols="0"
              rows="10"
              className="contact__input"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="contact__button button"
            ></input>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
