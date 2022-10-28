import React from "react";
import "../styles/app.css";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app--container">
      <div className="content--container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}
