import "./Dashboard.css";

import React, { useEffect, useState } from "react";

import { SwitchHorarios, SwitchRol } from "../../components/Switchs/Switchs";
import { useAuth } from "../../contexts/authContext";
import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import useWidth from "../../hooks/useWidth";

const Dashboard = () => {
  const [anno, setAnno] = useState();
  const { user } = useAuth();
  const { ancho } = useWidth();

  useEffect(() => {
    const date = new Date();
    setAnno(date.getFullYear());
  }, []);

  return (
    <>
      {ancho > 1050 ? (
        <div className="dashboard">
          <div className="optionsD">
            <SwitchRol rol={user?.rol} curso={anno} />
          </div>
          <div className="contentD">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="dashboard2">
          <div className="nav-select">
            <Nav rol={user?.rol} curso={anno} />
          </div>
          <div className="contentD-mobile">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
