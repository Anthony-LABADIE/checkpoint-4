import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../services/api";

function Inscription() {
  const [inputInscription, setInputInscription] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputInscription({
      ...inputInscription,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (
      inputInscription.firstname &&
      inputInscription.lastname &&
      inputInscription.email &&
      inputInscription.password
    ) {
      api
        .post("user/", { ...inputInscription })
        .then((res) => {
          if (res.status === 201) {
            navigate("/");
          }
        })
        .catch((err) => alert(err.response));
    } else {
      alert("Please specify both email and password");
    }
  };
  return (
    <div>
      <label htmlFor="login">
        Firstname <br />
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={inputInscription.firstname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="Inscription">
        Lastname <br />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={inputInscription.lastname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="Inscription">
        Email <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={inputInscription.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="Inscription">
        Password <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={inputInscription.password}
          onChange={handleChange}
        />
      </label>
      <div>
        <NavLink to="/">
          <button onClick={handleSubmitConnexion} type="submit">
            Valider
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Inscription;
