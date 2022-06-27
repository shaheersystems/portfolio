import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="links">
        <a href="/" title="Home">
          <span class="material-icons">home</span>
        </a>
        <a href="/" title="projects">
          <span class="material-icons">view_quilt</span>
        </a>
        <a href="/" title="About">
          <span class="material-icons">help</span>
        </a>
        <a href="/" title="skills">
          <span class="material-icons">code</span>
        </a>
        <a href="/" title="education">
          <span class="material-icons">school</span>
        </a>
      </div>
      <div className="twitter">
        <a href="/" title="Github">
          <span className="fa fa-github"></span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
