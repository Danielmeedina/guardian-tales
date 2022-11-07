import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel";
import "./hero.css";
import Weapons from "../Weapons";
import HeroDetails from "../HeroDetails";

export default function Hero() {
  const [heroe, setHeroe] = useState([]);
  const [sprites, setSprites] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const { name } = useParams();
  const flipCard = useRef();

  useEffect(() => {
    const call = async (url) => {
      let res = await fetch(url);
      const json = await res.json();
      setHeroe(json);
      setSprites(Object.values(json.imgs?.sprites));
      setWeapons(json.weapons);
    };
    call(
      `https://api-guardian-tales.herokuapp.com/api/guardian-tales/heroes/${name}`
    );
  }, [name]);

  useEffect(() => {
    document.title = `Hero | ${heroe.fullname ? heroe.fullname : "..."}`;
  });

  const flip = () => {
    flipCard?.current?.classList?.toggle("rotate");
  };

  const backgroung = {
    backgroundImage: `url(${heroe.imgs?.background})`,
    color: "white",
  };
  return (
    <article className="background-hero" style={backgroung}>
      <div className="container-hero">
        <div className="title">
          <h2>{heroe.fullname}</h2>
        </div>
        <div className="img-hero">
          <img
            src={heroe.imgs?.illustration}
            alt={heroe.fullname}
            title={heroe.fullname}
          />
        </div>
      </div>

      <div className="container-details">
        <div className="info-heroe">
          <div className="blur" style={backgroung}></div>
          <div className="hero-details">
            <HeroDetails heroe={heroe} />
          </div>
          <div ref={flipCard} className="weapon">
            <Weapons weapons={weapons} />
            {weapons.length > 1 && (
              <div className="change">
                <button onClick={flip}>
                  <i className="fa-solid fa-repeat fa-2x"></i>
                </button>
              </div>
            )}
          </div>
          <div className="sprites">
            <Carrousel data={sprites} />
          </div>
          <div className="history">
            <p>{heroe.history}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
