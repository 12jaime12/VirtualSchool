import { getMisAlumns } from "../../service/API_proyect/user.service";
import "./CrearNota.css";
import React, { useEffect, useState } from "react";

const CrearNota = () => {
  const [alumns, setAlumns] = useState({ data: { alumn: [] } });

  useEffect(() => {
    (async () => {
      setAlumns(await getMisAlumns());
    })();
  }, []);

  useEffect(() => {
    console.log(alumns.data.alumn);
  }, [alumns]);
  return (
    <>
      <div className="crearnota">
        <h1>Crear Nota</h1>
        <p className="negro">
          {alumns?.data?.name} {alumns?.data?.curso} {alumns?.data?.year}
        </p>
        <div>
          {alumns?.data?.alumn?.length > 0 ? (
            alumns?.data?.alumn?.map((element) => (
              <div key={element.name} className="carta">
                <img src={element.image} alt={element.name} />
                <p className="negro">{element.name}</p>
              </div>
            ))
          ) : (
            <p className="negro">cargando</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CrearNota;
