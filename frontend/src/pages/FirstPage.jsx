import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import home from "../assets/home.png";
import "./FirstPage.css";

function FirstPage() {
  return (
    <div className="FirstPage">
      <Navbar />
      <div className="FirstPage_container">
        <h1>
          Bienvenue sur LabsMovies <br />
          un site simple pour tenir votre <br />
          liste des films vus et à voir
        </h1>
        <img src={home} alt="home" />
      </div>
    </div>
  );
}

export default FirstPage;
