import React from "react";
import { useAuth } from "../../contexts/authContext";
import "./ProfileHome.css";
const ProfileHome = () => {
  const { user } = useAuth();
  return (
    <div className="fraseProfileHome">
      <h3 className="saludoProfile">
        Bienvenido a tu perfil {user.user}, aquí podrás cambiar tus datos
        personales
      </h3>
    </div>
  );
};

export default ProfileHome;
