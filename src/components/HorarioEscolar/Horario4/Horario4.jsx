import React from "react";

const Horario4 = () => {
  return (
    <div className="tabla">
      <table className="cal">
        <caption>4 ESO</caption>
        <thead>
          <tr>
            <th></th>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="horas">8:30 a 9:25 </td>
            <td className="Lengua">
              Lengua<span> Aula</span>
            </td>
            <td className="Fisica">
              Física <span> Aula</span>
            </td>
            <td className="Lengua">
              Lengua<span> Info 2</span>
            </td>
            <td className="Mates">
              Matemáticas <span> Aula </span>
            </td>
            <td className="Ingles">
              Inglés <span> Aula</span>
            </td>
          </tr>
          <tr>
            <td className="horas">9:25 a 10:20 </td>
            <td className="Mates">
              Matemáticas <span> Aula </span>
            </td>
            <td className="Lengua">
              Lengua<span> Info 2</span>
            </td>
            <td className="Musica">
              Musica <span> Aula musica</span>
            </td>
            <td className="Bio">
              {" "}
              Biología <span> Info2</span>
            </td>
            <td className="Fisica">
              Física <span> Aula</span>
            </td>
          </tr>
          <tr>
            <td className="horas">10:20 a 11:10 </td>
            <td className="Musica">
              Música <span> Aula música</span>
            </td>
            <td className="Bio">
              {" "}
              Biología <span> Info2</span>
            </td>
            <td className="Mates">
              Matemáticas <span> Aula </span>
            </td>
            <td className="Fisica">
              Física <span> Aula</span>
            </td>
            <td className="Musica">
              Música <span> Aula música</span>
            </td>
          </tr>
          <tr>
            <td className="horas">11:10 a 11:35 </td>
            <td className="recreo">
              Recreo <span> Patio</span>
            </td>
            <td className="recreo">
              Recreo <span> Patio</span>
            </td>
            <td className="recreo">
              Recreo <span> Patio</span>
            </td>
            <td className="recreo">
              Recreo <span> Patio</span>
            </td>
            <td className="recreo">
              Recreo <span> Patio</span>
            </td>
          </tr>
          <tr>
            <td className="horas">11:35 a 12:30 </td>
            <td className="Bio">
              {" "}
              Biología <span> Info2</span>
            </td>
            <td className="Ingles">
              Inglés <span> Aula</span>
            </td>
            <td className="Ingles">
              Inglés <span> Aula</span>
            </td>
            <td className="Lengua">
              Lengua<span> Info 2</span>
            </td>
            <td className="Mates">
              Matemáticas <span> Aula </span>
            </td>
          </tr>
          <tr>
            <td className="horas">12:30 a 13:25 </td>
            <td className="Ingles">
              Inglés <span> Aula</span>
            </td>
            <td className="Musica">
              Música <span> Aula música</span>
            </td>
            <td className="Fisica">
              Física <span> Aula</span>
            </td>
            <td className="Ingles">
              Inglés <span> Aula</span>
            </td>
            <td className="Bio">
              {" "}
              Biología <span> Info2</span>
            </td>
          </tr>
          <tr>
            <td className="horas">13:25 a 14:15</td>
            <td className="Fisica">
              Física <span> Aula</span>
            </td>
            <td className="Mates">
              Matemáticas <span> Aula </span>
            </td>
            <td className="Bio">
              {" "}
              Biología <span> Info2</span>
            </td>
            <td className="Musica">
              Música <span> Aula música</span>
            </td>
            <td className="Lengua">
              Lengua<span> Info 2</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Horario4;
