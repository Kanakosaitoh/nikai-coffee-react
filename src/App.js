import React from "react";
import "./App.css";
import logo from "./nikai-logo.png";
import Header from "./Header";
import Cards from "./Cards";
import Main from "./Main";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <Main />
        <div className="cards">
          <Cards />
        </div>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
