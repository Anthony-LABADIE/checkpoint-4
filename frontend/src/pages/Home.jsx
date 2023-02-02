import React, { useContext, useState } from "react";
import logo from "../assets/video.png";
import { authContext } from "../contexts/AuthContexts";
import MoviesPops from "../Components/moviesPop/MoviesPops";
import "./Home.css";
import Library from "../Components/Library/Library";
import dataNav from "../tools/dataNav";

function Home() {
  const { auth, logout } = useContext(authContext);
  const [isActiveNav, setIsActiveNav] = useState(2);

  const handleActiveNav = (id) => {
    setIsActiveNav(id);
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
        <div className="login_logout">
          <p>Mon Compte</p>
          <button type="button" onClick={logout}>
            Se déconnecter
          </button>
        </div>
      </div>
      <div className="containeur_section">
        <nav className="navSection">
          <ul className="ulSection">
            {dataNav.map((el) => (
              <li
                onClick={() => handleActiveNav(el.id)}
                className="link_nav"
                role="presentation"
              >
                {el.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="containeur_movies">
        {(() => {
          switch (true) {
            case isActiveNav === 1:
              return <p className="futur">Bientôt disponible</p>;
            case isActiveNav === 2:
              return <MoviesPops />;
            case isActiveNav === 3:
              return <p className="futur">Bientôt disponible</p>;
            case isActiveNav === 4:
              return <Library />;
            default:
              return null;
          }
        })()}
      </div>
      ;
    </div>
  );
}

export default Home;
