import React from "react";

const Nav = ({ rol, curso }) => {
  switch (rol) {
    case "alumn":
      return (
        <>
          <div>
            <select>
              <option></option>
            </select>
          </div>
        </>
      );
  }
};

export default Nav;
