import React from "react";
import igLogo from "./ig-logo.png";
import fbLogo from "./fb.png";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <div className="icons">
      <img
        src={igLogo}
        alt="ig-logo"
        width={18}
        height={18}
        className="ig-logo "
      />
      <img
        src={fbLogo}
        alt="fb-logo"
        width={20}
        height={20}
        className="fb-logo "
      />
      <div>
        This website is creacted by <a href="">Kanako Saitoh</a>.
      </div>
    </div>
  );
}
