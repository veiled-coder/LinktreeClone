import React from "react";
import Buttons from "./Buttons";

export default function Socials() {
  return (
    <section className="socials__container">
      <Buttons name="Twitter Link" />
      <Buttons
        name="Zuri Team"
        id="btn__zuri"
        href="https://training.zuri.team/"
      />
      <Buttons
        name="Zuri Books"
        id="books"
        href="http://books.zuri.team"
        subtext="check out zuri books here"
      />
      <Buttons
        name="Phython Books"
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=veiled-coder"
        subtext="Buy these books at our store today!"
      />
      <Buttons
        name="Background Check for Coders"
        id="pitch"
        href="https://background.zuri.team"
        subtext="Checking developers background has never been easier. Join us today to get started !"
      />
      <Buttons
        name="Design Books"
        id="book__design"
        href="https://books.zuri.team/design-rules"
        subtext="We are here to help you get stated in your design career. Click here to access our free design books"
      />
      <Buttons name="contact" id="Contact" to="/contact" />
    </section>
  );
}
