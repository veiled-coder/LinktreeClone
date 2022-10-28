import React from "react";
import "../styles/footer.css";
import zuri from "../images/zuri.png";
import text from "../images/Footer-text.png";
import i4g from "../images/I4G.png";

function Footer() {
  return (
    <div className="footer">
      <hr className="line" />
      <div>
        <img src={zuri} alt="zuri-icon" className="footer--icon" />
        <img src={text} alt="text-icon" className="footer--icon text" />
        <img src={i4g} alt="i4g-icon" className="footer--icon" />
      </div>
    </div>
  );
}

export default Footer;
