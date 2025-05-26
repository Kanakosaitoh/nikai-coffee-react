import React from "react";
import "./App.css";
import logo from "./nikai-logo.png";
import Header from "./Header";
import Cards from "./Cards";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <div className="container m-5 ">
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
          <div className="cards">
            <Cards />
          </div>
        </div>
      </main>
    </div>
  );
}
