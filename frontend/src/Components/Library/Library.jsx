import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import deleteicone from "../../assets/delete.png";
import verifier from "../../assets/verifier.png";
import { authContext } from "../../contexts/AuthContexts";
import "./Library.scss";

function Library() {
  const { auth } = useContext(authContext);
  const [allFilmLibrary, setAllFilmLibrary] = useState([]);
  const [postRangeval, setPostRangeval] = useState({
    remarque: "",
  });
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // 👇️ toggle visibility
    setIsShown(!isShown);
  };

  const getAllFilmLibrary = async () => {
    api.get(`film/library/${auth.data.id}`).then((response) => {
      setAllFilmLibrary(response.data);
    });
  };
  const deleteFilm = async (idFilm) => {
    await api.delete(`library/${idFilm}`);
    getAllFilmLibrary();
  };
  useEffect(() => {
    getAllFilmLibrary();
  }, []);
  const handleChange = (e) => {
    setPostRangeval({ ...postRangeval, [e.target.name]: e.target.value });
  };
  const handleSubmitremarque = async (idFilmPost) => {
    await api
      .put(`library/${idFilmPost}`, { ...postRangeval })
      .catch((err) => err.response);
    getAllFilmLibrary();
  };
  return (
    <div className="Containeur_lib_movie">
      {allFilmLibrary.map((el) => (
        <div>
          <div className="movies_lib">
            <img className="img_film" src={el.image} alt="imagefilm" />
            <div className="container_hover">
              <div className="img_delete">
                <img
                  onClick={() => {
                    deleteFilm(el.id);
                  }}
                  src={deleteicone}
                  alt="delete"
                  role="presentation"
                />
              </div>
              <div className="change_remarque">
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="10"
                  name="remarque"
                  onChange={handleChange}
                />
                <img
                  className="img_verifier"
                  onClick={() => handleSubmitremarque(el.id)}
                  src={verifier}
                  alt="logoverifier"
                  typeof="submit"
                  role="presentation"
                />
              </div>
            </div>
            {el.remarque === null ? null : (
              <div
                onClick={handleClick}
                className="remarque"
                role="presentation"
              >
                <p>{el.remarque}/10</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Library;
