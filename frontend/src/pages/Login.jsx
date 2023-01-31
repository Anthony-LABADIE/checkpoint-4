import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../services/api";
import { authContext } from "../contexts/AuthContexts";

function Login() {
  const { login } = useContext(authContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

      <NavLink to="/inscription">
        <p>Pas de compte ?</p>
      </NavLink>
      <NavLink to="/home">
        <button type="button" onClick={handleSubmit}>
          Se connecter
        </button>
      </NavLink>
    </div>
  );
}

export default Login;
