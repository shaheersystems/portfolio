import React from "react";

function Navbar() {
  return (
    <div className="nav-wrap">
      <div className="nav">
        <div className="logo">
          <h2>Shaheer.</h2>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/">Skills</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
