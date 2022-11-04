import React from "react";
import "../styles/contact.css";
import Button from "./Buttons";
function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div className="names">
          <div className="name">
            <label htmlFor="first_name">First Name</label>

            <input
              id="first_name"
              type="text"
              className="input--style"
              placeholder="Enter your first name"
            />
          </div>
          <div className=" name">
            <label htmlFor="last_name">Last Name</label>

            <input
              id="last_name"
              type="text"
              className="input--style"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="mail">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input--style"
            placeholder="yourname@email.com"
          ></input>
        </div>
        <div className="textarea">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="input--style"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="terms">
          <input type="checkbox" id="term"></input>
          <label htmlFor="term" className="term--text">
            You agree to providing your data to who may contact you.
          </label>
        </div>
        <Button
          type="submit"
          name="Send message"
          Class="input--style btn--submit"
          id="btn_submit"
        />
      </form>
    </div>
  );
}

export default Contact;
