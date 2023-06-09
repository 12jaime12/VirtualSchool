import "./Profile.css";

import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="options">
          <ul>
            <li>
              <a>Cambiar Contraseña</a>
            </li>
            <li>
              <a>Actualizar perfil</a>
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
