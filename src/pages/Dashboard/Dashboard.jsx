import "./Dashboard.css";

import React from "react";

import Horario1 from "../../components/HorarioEscolar/Horario1/Horario1";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="optionsD">
          <p>hola</p>
        </div>
        <div className="contentD">
          <Horario1/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
