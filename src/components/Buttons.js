import React from "react";


export default function Buttons(props) {
  return (
    <>
      <a href={props.href}>
        <button id={props.id} className="socials__btn">
          {props.name}
        </button>
      </a>
     
    </>
  );
}
