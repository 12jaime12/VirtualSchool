import "./Dashboard.css";

import React, { useEffect, useState } from "react";

import { getCursoActual } from "../../service/API_proyect/user.service";
import { SwitchHorarios, SwitchRol } from "../../components/Switchs";
import { useAuth } from "../../contexts/authContext";

const Dashboard = () => {
  const [curso, setCurso] = useState({});
  const [anno, setAnno] = useState();
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      setCurso(await getCursoActual());
    })();
  }, []);

  useEffect(() => {
    const date = new Date();
    setAnno(date.getFullYear());
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="optionsD">
          <SwitchRol rol={user.rol} curso={anno} />
        </div>
        <div className="contentD">
          <SwitchHorarios curso={curso.data} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
