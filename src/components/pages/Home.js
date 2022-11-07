import React from "react";
import { useEffect } from "react";
import "./Home.css";
import Swal from "sweetalert2";
import title from "../../img/title-tales.png";
import gabi from "../../img/Gabriela.png";
import icon from "../../img/AppIconW15.png";
import playStore from "../../img/playStore.webp";
import Door from "../../img/img_open.png";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
    warning();
  });

  const warning = () => {
    return Swal.fire({
      title: "Information",
      text: "This wiki is in no way affiliated with Kakao Games Corp., it is just a tribute that I wanted to do",
      icon: "info",
    });
  };

  return (
    <>
      <section className="home">
        <div className="home-container">
          <div className="home-title">
            <span>A LINK CLASIC ADVENTURE</span>
            <img src={title} alt="guardian tales title" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-container">
          <div className="chibi gabi">
            <img src={gabi} alt="gabriela gt" title="gabriela guardian tales" />
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="300px"
              loading="lazy"
              src="https://www.youtube.com/embed/WPKB3KJYTn4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text">
            <div>
              <span>A NEW STYLE OF A CLASSIC</span>
              <h2> ADVENTURE</h2>
            </div>
            <div>
              <p>
                A link to the past! Relive your greatest adventures with
                Guardian Tales! From solving challenging puzzles in epic
                dungeons to strategic action combat, embark on this legendary
                journey to save the world of Kanterbury!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="download">
        <div className="download-container">
          <div className="icon-download">
            <img src={icon} alt="" />
            <div>
              <span>DOWNLOAD NOW AND BECOME A</span>
              <h3>LEGEND</h3>
            </div>
            <div className="service-download">
              <a
                href="https://apps.apple.com/app/guardian-tales/id1485526957"
                target="_blank"
                rel="noreferrer"
              >
                <div className="apple">
                  <i className="fa-brands fa-apple fa-2x"></i>
                  <div>
                    <span>Download on the</span>
                    <h4>App Store</h4>
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kakaogames.gdts&referrer=singular_click_id%3D89248683-2d1f-4dbf-9242-158ab6795fbe"
                target="_blank"
                rel="noreferrer"
              >
                <div className="android">
                  <img src={playStore} alt="" />
                  <div>
                    <span>GET IT ON</span>
                    <h4>Google Play</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="img-download">
            <img src={Door} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
