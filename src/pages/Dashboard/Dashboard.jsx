import "./Dashboard.css";

import React, { useEffect, useState } from "react";

import { SwitchHorarios, SwitchRol } from "../../components/Switchs";
import { useAuth } from "../../contexts/authContext";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [anno, setAnno] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const date = new Date();
    setAnno(date.getFullYear());
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="optionsD">
          <SwitchRol rol={user?.rol} curso={anno} />
        </div>
        <div className="contentD">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
