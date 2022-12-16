import React, { useState } from "react";
import "./Worlds.css";
import img1 from "../img/carusel3.png";
import img2 from "../img/carusel2.png";
import img3 from "../img/carusel1.png";
import img4 from "../img/carusel4.png";
import img5 from "../img/carusel5.png";
import img6 from "../img/carusel6.png";
import img7 from "../img/carusel7.png";
import img8 from "../img/carusel8.png";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Worlds = () => {
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [actualImg, setActualImg] = useState(0);
  const lengthImg = imgs?.length;

  if (!Array.isArray(imgs) || lengthImg === 0) return;

  const prev = () => {
    setActualImg(actualImg === 0 ? lengthImg - 1 : actualImg - 1);
  };

  const next = () => {
    setActualImg(actualImg === lengthImg - 1 ? 0 : actualImg + 1);
  };

  const back = actualImg;

  const backStyle = {
    backgroundImage: `url(${imgs[back]})`,
  };
  return (
    <section id="worlds" style={backStyle}>
      <div className="worlds-container">
        <div className="text">
          <div>
            <span>SO MANY WORLDS TO</span>
            <h2> EXPLORE</h2>
          </div>
          <div>
            <p>
              From the lush, majestic greenery of Kanterbury to the mysterious
              and ghastly classrooms of Magic School, Guardian Tales has a
              variety of worlds to explore! You'll encounter countless friends
              along your journey to help you save the world from chaos and
              destruction!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-control">
            <button className="btnCarusel prev" onClick={prev}>
              <FaAngleDoubleLeft />
            </button>
            <button className="btnCarusel next" onClick={next}>
              <FaAngleDoubleRight />
            </button>
          </div>
          {imgs.map((img, index) => {
            return (
              actualImg === index && (
                <img key={index} src={img} alt="Guardian tales world" />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Worlds;
