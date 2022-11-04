import React from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
export default function Socials() {
  return (
    <section className="socials__container">
      <Buttons name="Twitter Link" />
      <a href="https://training.zuri.team/">
        <Buttons name="Zuri Team" id="btn__zuri" />
      </a>
      <a href="http://books.zuri.team">
        <Buttons
          name="Zuri Books"
          id="books"
          subtext="check out zuri books here"
        />
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=veiled-coder">
        <Buttons
          name="Phython Books"
          id="book__python"
          subtext="Buy these books at our store today!"
        />
      </a>
      <a href="https://background.zuri.team">
        <Buttons
          name="Background Check for Coders"
          id="pitch"
          subtext="Checking developers background has never been easier. Join us today to get started !"
        />
      </a>
      <a href="https://books.zuri.team/design-rules">
        <Buttons
          name="Design Books"
          id="book__design"
          subtext="We are here to help you get stated in your design career. Click here to access our free design books"
        />
      </a>
      <Link to="/contact">
        <Buttons name="Contact Me" />
      </Link>
    </section>
  );
}
