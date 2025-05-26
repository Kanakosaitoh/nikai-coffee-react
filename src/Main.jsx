import React from "react";
import "./Main.css";
import logo from "./nikai-logo.png";
export default function Main() {
  return (
    <div className="container m-5 d-flex justify-content-around">
      <div className="row">
        <div className="col-6">
          <img
            src={logo}
            className="logo"
            width="300"
            height="300"
            alt="nikai-logo"
          />
        </div>
        <div className="col-6">
          <h4 className="brand-concept m-4">
            Nikai coffee offers Speciality coffee. We specialize in
            well-balanced aromcatic single origin
            <br /> coffee beans. <br />
            coffee coffee coffee coffee coffee
          </h4>
        </div>
      </div>
    </div>
  );
}
