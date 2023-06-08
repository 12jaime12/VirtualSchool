import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Header.css";

import React from "react";

const Header = () => {
  const { user, logout } = useAuth();

  if (user !== null && user?.check == true) {
    return (
      <>
        <header>
          <div className="headerActive">
            <div className="logoVirtualSchool">
              <NavLink to="/dashboard">
                <img
                  src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686055967/vslogo2_zuhrsr.png"
                  alt="logo"
                  className="logo"
                />
              </NavLink>
            </div>
            {user !== null && user?.check == true ? (
              <nav className="iconoUsuario">
                <ul>
                  <li>
                    <img src={user.image} alt={user.user} />
                    <ul>
                      <li>
                        <NavLink to="/profile">
                          <p className="perfil">Perfil</p>
                        </NavLink>
                      </li>
                      <li>
                        <a onClick={() => logout()}>Cerrar Sesión</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            ) : null}
          </div>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header>
          <div className="logoVirtualSchoolNo">
            <img
              src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686055967/vslogo2_zuhrsr.png"
              alt="logo"
              className="logo"
            />
          </div>
        </header>
      </>
    );
  }
};

export default Header;
