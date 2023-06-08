import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Header.css";

import React from "react";

const Header = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <>
      <header>
        <div className="logoVirtualSchool">
          <img
            src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686055967/vslogo2_zuhrsr.png"
            alt="logo"
            className="logo"
          />
        </div>
        {user !== null && user?.check == true ? (
          <nav className="iconoUsuario">
            <ul>
              <li>
                <img src={user.image} alt={user.user} />
                <ul>
                  <li>
                    <NavLink to="/profile">
                      <a>Perfil</a>
                    </NavLink>
                  </li>
                  <li>
                    <a>Cerrar Sesión</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
};

export default Header;
