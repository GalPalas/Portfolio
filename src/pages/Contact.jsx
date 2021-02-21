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
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
          <form onSubmit={sendEmail} class="contact__form">
            <input
              name="name"
              type="text"
              placeholder="Name"
              class="contact__input"
            ></input>
            <input
              name="email"
              type="mail"
              placeholder="Email"
              class="contact__input"
            ></input>
            <textarea
              name="message"
              id=""
              placeholder="Message"
              cols="0"
              rows="10"
              class="contact__input"
            ></textarea>
            <input
              type="submit"
              value="Send"
              class="contact__button button"
            ></input>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
