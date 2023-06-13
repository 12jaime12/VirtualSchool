import React from "react";
import { useAuth } from "../../contexts/authContext";
import "./ProfileHome.css";
const ProfileHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="negro">
        Bienvenido {user.name} a tu perfil aqui podras cambiar tus datos
        personales
      </h3>
    </div>
  );
};

export default ProfileHome;
