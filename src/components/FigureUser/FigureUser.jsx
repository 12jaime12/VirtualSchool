import React from "react";
import "./FigureUser.css";

const FigureUser = (user) => {
  return (
    <figure className="photoProfile">
      <img src={user.user.image} alt="photo user" className="photoUser" />
      <h3 className="emailUser">email: {user.user.email}</h3>
    </figure>
  );
};

export default FigureUser;
