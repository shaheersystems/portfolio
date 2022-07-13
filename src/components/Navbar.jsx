import React from "react";

function Navbar() {
  return (
    <div className="nav-wrap">
      <div className="nav">
        <div className="logo">
          <h2>Shaheer.</h2>
        </div>
        <div className="links">
          <a href="/">Projects</a>
          <a href="/">Skills</a>
          <a href="/">About</a>
        </div>
        <div className="icon">
          <span className="material-icons">email</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
