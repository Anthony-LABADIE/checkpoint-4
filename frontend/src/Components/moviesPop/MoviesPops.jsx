import PropTypes from "prop-types";
import React from "react";
import editer from "../../assets/editer.png";
import ajouter from "../../assets/ajouter.png";
import "./MoviesPops.scss";

function MoviesPops({ film }) {
  return (
    <div>
      {film.map((el) => (
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
                  <img src={ajouter} alt="logo" className="material-icons" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// {film.map((el) => (
//   <div className="movies_pops">
//     <img src={el.image} alt="movies" />
//     <p>{el.title}</p>
//   </div>
// ))}

MoviesPops.propTypes = {
  film: PropTypes.func.isRequired,
  map: PropTypes.func.isRequired,
};

export default MoviesPops;
