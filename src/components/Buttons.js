import React from "react";
import { Link } from "react-router-dom";

export default function Buttons({ name, id, subtext, href, to }) {
  return (
    <>
      <a href={href}>
        <Link to={to}>
          <button id={id} className="socials__btn" title={subtext}>
            {name}
          </button>
        </Link>
      </a>
    </>
  );
}
