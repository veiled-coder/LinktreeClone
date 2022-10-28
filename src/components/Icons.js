import React from "react";
import slack from ".././images/slack.png";
import git from ".././images/git.png";

function Icons() {
  return (
    <div className="icon--container">
      <img alt="slack--img" src={slack} className='icons'></img>
      <img alt="slack--img" src={git} className='icons'></img>
    </div>
  );
}

export default Icons;
