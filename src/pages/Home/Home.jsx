import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Home.css";
import React from "react";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fondo">
      <div className="homeContainer">
      {user !== null ? (
        <h1 className="titleHome">Bienvenido {user.user}</h1>
      ) : (
        <>
          <h1 className="titleHome">
            Por favor, regístrese para poder acceder a la página
          </h1>
          <button className="btn" onClick={() => navigate("/login")}>
            IR A LOGIN
          </button>
        </>
      )}
    </div>
    </div>
  
  );
};

export default Home;
