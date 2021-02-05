import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__comp">
        <img
          src="https://www.logo.wine/a/logo/Manchester_United_F.C./Manchester_United_F.C.-Logo.wine.svg"
          alt=""
        />
        <h2>Loremisthewordinthis oinfiaoi</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          repellendus?
        </p>
      </div>
      <div className="card__comp">
        <img
          src="https://www.logo.wine/a/logo/Liverpool_F.C./Liverpool_F.C.-Logo.wine.svg"
          alt=""
        />
        <h2>Loremisthewordinthis oinfiaoi</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          repellendus?
        </p>
      </div>

      <div className="card__comps">
        <div className="card__comp">
          <img
            src="https://www.logo.wine/a/logo/Toronto_FC/Toronto_FC-Logo.wine.svg"
            alt=""
          />
          <h2>Loremisthewordinthis oinfiaoi</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            repellendus?
          </p>
        </div>
        <div className="card__comp">
          <img
            src="http://www.logo.wine/a/logo/Manchester_City_F.C./Manchester_City_F.C.-Logo.wine.svg"
            alt=""
          />
          <h2>Loremisthewordinthis oinfiaoi</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            repellendus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
