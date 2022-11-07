import "./footer.css";
import img from "../img/backgrounds/backImage.png";

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <div className="footer-container">
        <div className="contact gt">
          <div>
            <a
              href="https://www.facebook.com/guardiantales/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/guardiantales_official/"
              target="blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/GuardianTalesEN"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCoxTZ3AhKclE7GUmTNE1HrA/featured"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>
          </div>
          <small>Guardian Tales is copyrighted by Kakao Games Corp.</small>
        </div>
        <div className="contact me">
          <div>
            <a
              href="https://twitter.com/MedinaDaniek"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://github.com/Danielmeedina"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-medina-828261242/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=danielmedina7778@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope fa-2x"></i>
            </a>
          </div>
          <small>© 2022 All Rights Reserved by Daniel Medina</small>
        </div>
        <div className="bottomImg">
          <img src={img} alt="background guardian tales" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
