import React from "react";

function TabBar() {
  return (
    <div className="tab-bar">
      <a href="/" className="active">
        Projects
      </a>
      <a href="/">About</a>
      <a href="/">Skills</a>
      <a href="/">Education</a>
    </div>
  );
}

export default TabBar;
