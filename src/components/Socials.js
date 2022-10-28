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
      <Buttons name="Zuri Books" id="books" href="http://books.zuri.team" />
      <Buttons
        name="Phython Books"
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref-id=veiled-coder"
      />
      <Buttons
        name="Background Check for Coders"
        id="pitch"
        href="https://background.zuri.team/"
      />
      <Buttons
        name="Design Books"
        id="book__design"
        href="https://books.zuri.team/design-rules"
      />
    </section>
  );
}
