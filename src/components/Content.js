import React from "react";
import "../styles/content.css";
import girl from "../images/girl.png";
import Socials from "./Socials";
import Icons from "./Icons";
import sharemobile from "../images/share.png";
import shareweb from "../images/shareweb.png";

import camera from "../images/camera.png";
export default function Content() {
  return (
    <>
      <img alt="the share icon" src={sharemobile} className="share sharemobile" />
      <img alt="the share icon" src={shareweb} className="share shareweb" />

      <div className="img--container">
        <img id="profile__img" alt="a-lady" src={girl} />
        <div className="overlay">
          <img src={camera} alt="a camera icon" className="camera" />
        </div>
      </div>
      <p id="twitter">@rohmaabdulfatt1</p>
      <p id="slack">veiled-coder</p>
      <Socials />
      <Icons />
    </>
  );
}
