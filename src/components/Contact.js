import React from "react";
import "../styles/contact.css";
import Button from "./Buttons";
import { useState } from "react";
function Contact() {
  const [txtarea, setTxtarea] = useState("");
  const [mail, setMail] = useState("");
  const [error, setError] = useState(false);

  function handletxtChange(e) {
    setTxtarea(e.target.value);
  }
  function handlemailChange(e) {
    setMail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(txtarea);
    if (txtarea.length === 0 || mail.length === 0) {
      setError(true);
    }
  }

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={handleSubmit}>
        <div className="names input--div">
          <div className="name ">
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
        <div className="mail input--div">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input--style mail--input"
            placeholder="yourname@email.com"
            onChange={handlemailChange}
          ></input>
          {error && mail.length <= 0 ? (
            <p className="error">This is a hint text to help user</p>
          ) : (
            ""
          )}
        </div>
        <div className="textarea input--div border--red">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={`input--style area ${error &&txtarea.length<=0? 'border-red':''}`}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            onChange={handletxtChange}
          ></textarea>
          {error && txtarea.length <= 0 ? (
            <p className="error error--textarea">pls enter a message</p>
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
