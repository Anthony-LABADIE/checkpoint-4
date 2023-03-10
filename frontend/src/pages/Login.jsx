import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navigate from "navigate";
import api from "../services/api";
import { authContext } from "../contexts/AuthContexts";
import LogoSiteWeb from "../Components/Navbar/LogoSiteWeb";
import "./Login.css";

function Login() {
  const { login, auth } = useContext(authContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    if (auth.data) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("user/login", { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            login(res.data);
          }
        })
        .catch((err) => err.response);
    }
  };
  return (
    <div>
      <div>
        <LogoSiteWeb />
      </div>
      <div className="Containeur_login">
        <label htmlFor="Login">
          Email <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="Login">
          Password <br />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <NavLink className="navlink" to="/inscription">
          <p>Pas de compte ?</p>
        </NavLink>
        <NavLink className="navlink" to="/home">
          <button type="button" onClick={handleSubmit}>
            Se connecter
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
