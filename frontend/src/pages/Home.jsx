import React, { useContext, useState } from "react";
import api from "../services/api";
import logo from "../assets/video.png";
import { authContext } from "../contexts/AuthContexts";
import MoviesPops from "../Components/moviesPop/MoviesPops";
import "./Home.css";

function Home() {
  const { auth } = useContext(authContext);
  const [film, setFilm] = useState([]);

  const getAllFilm = () => {
    api.get("film/").then((response) => {
      setFilm(response.data);
    });
  };
  return (
    <div className="container_home">
      <div className="home_logo">
        <img src={logo} alt="" />
      </div>
      <div className="search_bar">
        <input type="text" />
      </div>
      <div className="profil">
        <img src={auth.data.image} alt="" />
        <p>Mon Compte</p>
      </div>
      <div className="containeur_section">
        <nav className="navSection">
          <ul className="ulSection">
            <li className="link_nav">Boutique</li>
            <li onClick={getAllFilm} className="link_nav" role="presentation">
              A l'affiche
            </li>
            <li className="link_nav">Film</li>
            <li className="link_nav">Bibliotèque</li>
          </ul>
        </nav>
      </div>
      <div className="containeur_movies">
        <MoviesPops film={film} />
      </div>
    </div>
  );
}

export default Home;
