import React from "react";
import "../styles/contact.css";
import Button from "./Buttons";
import { useState } from "react";
function Contact() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    console.log(e)
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    if (value.length == 0) {
      setError(true);

    }

  }

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={handleSubmit}>
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
            onChange={handleChange}
            
          ></textarea>
          {error && value.length <= 0 ? (
            <p style={{ color: "red", marginTop: "-.6rem" }}>
              pls enter a message
            </p>
          ) : (
            ""
          )}
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
