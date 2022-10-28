import React from "react";
import "../styles/content.css";
import veil from "../images/veil.png";
import Socials from "./Socials";
import Icons from "./Icons";
export default function Content() {
  return (
    <>
      <div className="img--container">
        <img id="profile__img" alt="a-veiled-lady" src={veil}></img>
      </div>
      <p id="twitter">@rohmaabdulfatt1</p>
      <p id="slack">veiled-coder</p>
      <Socials />
      <Icons />
    </>
  );
}
