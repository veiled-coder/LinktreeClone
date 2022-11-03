import React from 'react';
import Content from './Content';
import Footer from './Footer';
import "../styles/app.css";

function Homepage() {
  return (
      <div className="app--container">
          <div className="content--container">
            <Content />
          </div>
          <Footer />
        </div>
  )
}

export default Homepage