import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <img
          src="https://www.logo.wine/a/logo/Manchester_United_F.C./Manchester_United_F.C.-Logo.wine.svg"
          alt=""
        />
        <h5>Loremdjferjeradhfkhdf dfldjflf</h5>
        <ArrowDropDownIcon />
      </div>
      <div className="sidebar__items">
        <img
          src="https://www.logo.wine/a/logo/Liverpool_F.C./Liverpool_F.C.-Logo.wine.svg"
          alt=""
        />
        <h5>Loremdjferjerafhkfhhfkdhk dfldjflf</h5>
      </div>
      <div className="sidebar__items">
        <img
          src="https://www.logo.wine/a/logo/Toronto_FC/Toronto_FC-Logo.wine.svg"
          alt=""
        />
        <h5>Loremdjferjeradhfkdhfk dfldjflf</h5>
        <ArrowDropDownIcon />
      </div>
      <div className="sidebar__items">
        <img
          src="http://www.logo.wine/a/logo/Manchester_City_F.C./Manchester_City_F.C.-Logo.wine.svg"
          alt=""
        />
        <h5>Loremdjferjerahfkdhfkf dfldjflf</h5>
      </div>
      <div className="sidebar__items">
        <img
          src="http://www.logo.wine/a/logo/Arsenal_F.C./Arsenal_F.C.-Logo.wine.svg"
          alt=""
        />
        <h5>Loremdjferjerahfkdhfdfh dfldjflf</h5>
      </div>
    </div>
  );
}

export default Sidebar;
