import React, { useState } from "react";
import "./ModesGame.css";
import { modesGame } from "../dataModes";

const ModesGame = () => {
  const [actualMode, setActualMode] = useState(modesGame[0]);

  return (
    <section id="ModesGames">
      <h3>MANY GAME MODES TO HAVE FUN</h3>
      <div className="modesContainer">
        <aside className="menuModes">
          <div className="carrousel">
            {modesGame.map((mode) => {
              return (
                <div key={mode.id} className="cardModes">
                  <img src={mode.img} alt={mode.title} title={mode.title} />
                  <button onClick={() => setActualMode(mode)}>
                    <h4>{mode.title}</h4>
                  </button>
                </div>
              );
            })}
          </div>
        </aside>
        <article className="showModes">
          <div className="text">
            <h2>{actualMode.title}</h2>
            <p>{actualMode.desc}</p>
          </div>
          <div className="modeImg">
            <img
              src={actualMode.img}
              alt={actualMode.title}
              title={actualMode.title}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ModesGame;
