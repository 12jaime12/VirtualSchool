import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="logoVirtualSchool">
          <img
            src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686055967/vslogo1_fsrfl1.png"
            alt="logo"
            className="logo"
          />
        </div>
      </header>
    </>
  );
};

export default Header