import React, { useEffect, useState } from "react";
import "./PositionCard.css";
const PositionCard = ({ data, setAlumn }) => {
  const [position, setPosition] = useState(0);
  const large = data.length;

  const suma = () => {
    console.log("suma");
    console.log(position);
    if (position < large - 1) {
      console.log("entro");
      setPosition(position + 1);
      setAlumn(data[position + 1]?._id);
    }
  };

  const resta = () => {
    console.log("resta");
    console.log(position);
    if (position > 0) {
      console.log("entro");
      setPosition(position - 1);
      setAlumn(data[position - 1]?._id);
    }
  };

  useEffect(() => {
    setAlumn(data[position]?._id);
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <div className="carrusel">
      <img
        className="flecha"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508366/left_vgwaum.png"
        alt="left"
        onClick={() => resta()}
      />
      <figure className="carta" id={data[position]?._id}>
        <img src={data[position]?.image} alt={data[position]?.name} />
        <h3 className="negro">{data[position]?.name}</h3>
        {data[position]?.nota ? (
          <p className="negro">Nota: {data[position]?.nota}</p>
        ) : null}
      </figure>
      <img
        className="flecha"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508364/right_hnqa08.png"
        alt="right"
        onClick={() => suma()}
      />
    </div>
  );
};

export default PositionCard;
