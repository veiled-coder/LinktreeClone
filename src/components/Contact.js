import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";
function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div className="names">
          <div className="name">
            <label for="first_name">First Name</label>

            <input
              id="first_name"
              type="text"
              className="input--style"
              placeholder="Enter your first name"
            ></input>
          </div>
          <div className=" name">
            <label for="last_name">Last Name</label>

            <input
              id="last_name"
              type="text"
              className="input--style"
              placeholder="Enter your last name"
            ></input>
          </div>
        </div>
        <div className="mail">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            className="input--style"
            placeholder="yourname@email.com"
          ></input>
        </div>
        <div className="textarea">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="input--style"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
      </form>
      <Link to="/">
        {" "}
        <p style={{ fontSize: "5rem" }}>Home</p>
      </Link>
    </div>
  );
}

export default Contact;
