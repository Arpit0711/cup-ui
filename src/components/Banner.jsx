import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__item">
        <h1>All cups</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel
          cupiditate ut saepe veniam facere atque beatae vero commodi! Ab.{" "}
        </p>
        <div className="banner__line"></div>
        <div className="banner__itemBottom">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h6>Loremistheword</h6>
        </div>
      </div>
    </div>
  );
}

export default Banner;
