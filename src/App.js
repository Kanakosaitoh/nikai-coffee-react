import React from "react";
import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <h4 className="brand-concept">Nikai coffee offers Speciality coffee</h4>
        <img src="/nikai-logo.png" width="300" height="300" />
      </main>
    </div>
  );
}
