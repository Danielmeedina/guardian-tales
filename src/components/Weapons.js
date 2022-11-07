import "./Weapons.css";
import { useRef } from "react";

const Weapons = ({ weapons }) => {
  const cardBack = useRef(null);
  const cardFront = useRef(null);

  return (
    <>
      {weapons.length < 2 ? (
        <>
          <img
            src={weapons[0]?.img}
            alt={weapons[0]?.name}
            title={weapons[0]?.name}
            loading="lazy"
          />
          <div className="weapon-details">
            <h3>{weapons[0]?.name}</h3>
            <h4>{weapons[0]?.type}</h4>
          </div>
        </>
      ) : (
        <>
          <div ref={cardFront} className="flip-face front ">
            <img
              src={weapons[0]?.img}
              alt={weapons[0]?.name}
              title={weapons[0]?.name}
              loading="lazy"
            />
            <div className="weapon-details">
              <h3>{weapons[0]?.name}</h3>
              <h4>{weapons[0]?.type}</h4>
            </div>
          </div>
          <div ref={cardBack} className="flip-face back">
            <img
              src={weapons[1]?.img}
              alt={weapons[1]?.name}
              title={weapons[1]?.name}
              loading="lazy"
            />
            <div className="weapon-details">
              <h3>{weapons[1]?.name}</h3>
              <h4>{weapons[1]?.type}</h4>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Weapons;
