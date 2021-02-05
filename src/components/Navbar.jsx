import React from "react";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Icon, InlineIcon } from "@iconify/react";
import trophyIcon from "@iconify-icons/mdi/trophy";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Icon icon={trophyIcon} color="#2550f4" width="5rem" height="3rem" />{" "}
        <h3>all cups</h3>
        <div className="navbar__line"></div>
        <div className="navbar__line1"></div>
        <div className="navbar__line2"></div>
      </div>
      <div className="navbar__center">
        <div className="navbar__center1">
          <SaveTwoToneIcon />
          <h6>Loremeraaer, ipsumeaddea.</h6>
        </div>
        <div className="navbar__center__2">
          <h6>Lorem ipsum</h6>
          <h6>Lorem, ipsum.</h6>
          <StarTwoToneIcon />
        </div>
      </div>
      <div className="navbar__right">
        <PermIdentityIcon />
        <p>UserName</p>
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default Navbar;
