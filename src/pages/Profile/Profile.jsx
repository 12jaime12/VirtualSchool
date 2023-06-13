import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./Profile.css";

import React from "react";

const Profile = () => {
  return (
    <>
    <div className="fondo">
    <div className="profile">
        <div className="options">
          <ul>
            <li>
              <NavLink to="/profile/formProfile">
                <p>Actualizar perfil</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/changePassword">
                <p>Cambiar Contraseña</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
