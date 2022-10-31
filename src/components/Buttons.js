import React from "react";

export default function Buttons({ name, id, subtext, href }) {
  return (
    <>
      <a href={href}>
        <button id={id} className="socials__btn" title={subtext}>
          {name}
        </button>
      </a>
    </>
  );
}
