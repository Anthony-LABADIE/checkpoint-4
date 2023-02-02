import React, { useContext, useEffect, useState } from "react";
import editer from "../../assets/editer.png";
import ajouter from "../../assets/ajouter.png";
import api from "../../services/api";
import { authContext } from "../../contexts/AuthContexts";
import "./MoviesPops.scss";

function MoviesPops() {
  const { auth } = useContext(authContext);
  const [allFilm, setAllFilm] = useState([]);
  const [library, setLibrary] = useState({
    film_id: "",
    user_id: auth.data.id,
  });
  useEffect(() => {
    api.get("film/").then((response) => {
      setAllFilm(response.data);
    });
  }, []);
  const addMovieLibrary = (findIdFilm) => {
    setLibrary({ ...library, film_id: findIdFilm });
  };
  useEffect(() => {
    api.post("/library", library);
  }, [library]);
  return (
    <div className="movies_pops">
      {allFilm.map((el) => (
        <div
          className="movie_card"
          id="bright"
          style={{
            backgroundImage: `url(${el.affiche})`,
            backgroundSize: "cover",
          }}
        >
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={el.image} alt="film" />
              <h1>{el.title}</h1>
              <h4>{el.release_date}</h4>
              <span className="minutes">{el.duration} min</span>
              <p className="type">{el.genre}</p>
            </div>
            <div className="movie_desc">
              <p className="text">Description</p>
            </div>
            <div className="movie_social">
              <ul>
                <li>
                  <img src={editer} alt="logo" className="material-icons" />
                </li>
                <li>
                  <img
                    onClick={() => {
                      addMovieLibrary(el.id);
                    }}
                    src={ajouter}
                    alt="logo"
                    className="material-icons"
                    role="presentation"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesPops;
