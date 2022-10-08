import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./TopBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import avatar from "../images/avatar.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>Find Jobs</div>
      <div>Hire Freelancers</div>
      <div>Get Ideas</div>
      <div>About</div>
      <div>Resources</div>
    </div>
  );
};

export default Navigation;
