import React from "react";
function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <h1>
          Hi I'm Shaheer, <br /> Check my portfolio!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas autem{" "}
          <br />
          nemo molestiae laborum beatae maiores eum!
        </p>
        <div className="btn">
          <a href="/">
            <span className="fa fa-github">
              {" "}
              <span className="git">Check my github</span>
            </span>
          </a>
        </div>
        <div className="fig"></div>
      </div>
    </div>
  );
}

export default Banner;
