import React from "react";


export default function Buttons({ name, id, subtext,Class,type}) {
  return (
    <>
      <button id={id} className={Class} title={subtext} type={type}> 
        {name}
      </button>
    </>
  );
}
