import "../Horario.css";
import React from "react";

const Horario1 = () => {
  return (
    <div className="tabla">
      <table className="cal">
        <caption>1 ESO</caption>
        <thead className="thead-horario">
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
            <td className="Lengua">Lengua</td>
            <td className="Mates">Mate</td>
            <td className="Bio">Biología</td>
            <td className="Ingles">Inglés</td>
            <td className="Fisica">Física</td>
          </tr>
          <tr>
            <td className="horas">9:25 a 10:20 </td>
            <td className="Ingles">Inglés</td>
            <td className="Fisica">Física</td>
            <td className="Musica">Musica</td>
            <td className="Mates">Mate</td>
            <td className="Bio">Biología</td>
          </tr>
          <tr>
            <td className="horas">10:20 a 11:10 </td>
            <td className="Bio">Biología</td>
            <td className="Lengua">Lengua</td>
            <td className="Ingles">Inglés</td>
            <td className="Lengua">Lengua</td>
            <td className="Mates">Mate</td>
          </tr>
          <tr>
            <td className="horas">11:10 a 11:35 </td>
            <td className="recreo">Recreo</td>
            <td className="recreo">Recreo</td>
            <td className="recreo">Recreo</td>
            <td className="recreo">Recreo</td>
            <td className="recreo">Recreo</td>
          </tr>
          <tr>
            <td className="horas">11:35 a 12:30 </td>
            <td className="Mates">Mate</td>
            <td className="Musica">Música</td>
            <td className="Fisica">Física</td>
            <td className="Bio">Biología</td>
            <td className="Lengua">Lengua</td>
          </tr>
          <tr>
            <td className="horas">12:30 a 13:25 </td>
            <td className="Musica">Música</td>
            <td className="Bio">Biología</td>
            <td className="Mates">Mate</td>
            <td className="Fisica">Física</td>
            <td className="Musica">Música</td>
          </tr>
          <tr>
            <td className="horas">13:25 a 14:15</td>
            <td className="Fisica">Física</td>
            <td className="Ingles">Inglés</td>
            <td className="Lengua">Lengua</td>
            <td className="Musica">Música</td>
            <td className="Ingles">Inglés</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Horario1;
