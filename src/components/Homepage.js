import React from 'react';
import Content from './Content';

import "../styles/app.css";

function Homepage() {
  return (
      <div className="app--container">
          <div className="content--container">
            <Content />
          </div>
        
        </div>
  )
}

export default Homepage