import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./TopBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import avatar from "../images/avatar.png";
const TopBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-left">
        <div className="logo">
          <Link to={"#"}>
            <img src={logo} style={{ width: 150 }} />
          </Link>
        </div>

        <div>
          <p>How It Works</p>
        </div>
        <div>
          <p>Browse Jobs</p>
        </div>
      </div>

      <div className="navBar-right">
        <div>Log In</div>
        <div>Sign Up</div>
        <div className="btn-post">Post a Project</div>
      </div>
    </div>
  );
};

export default TopBar;
