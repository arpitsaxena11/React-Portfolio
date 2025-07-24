import React from "react";
import './contact.css';

function Contact() {
  return (
    <section className="contact">
      <h1 className="Title"> Contact Me </h1>
      <form  method="post" action="https://script.google.com/macros/s/AKfycbxVtZoiLNLlcDrzv4nbWfJ57TAniCXPEbEzBxCXGJjBSBpMm0WwjJTdlLGaSibGOxyQ/exec" >
        <div className="form">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" placeholder="Name" required />
        </div>

        <div className="form">
          <label htmlFor="Email" hidden>
            Email
          </label>
          <input type="text" name="email" placeholder="Email" required />
        </div>

        <div className="form">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message" id="message" placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
