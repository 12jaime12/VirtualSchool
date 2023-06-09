import "./Profile.css";

import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="options">
          <ul>
            <li>
              <p>Cambiar Contraseña</p>
            </li>
            <li>
              <p>Actualizar perfil</p>
            </li>
          </ul>
        </div>
        <div className="content">
          <p>profile</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
