import "./heroDetails.css";
import basic from "../img/element/basic.png";
import dark from "../img/element/dark.png";
import light from "../img/element/light.png";
import water from "../img/element/water.png";
import earth from "../img/element/earth.png";
import fire from "../img/element/fire.png";
import range from "../img/role/ranged.png";
import support from "../img/role/support.png";
import tank from "../img/role/tank.png";
import warrior from "../img/role/warrior.png";

const HeroDetails = ({ heroe }) => {
  const Element = (element) => {
    switch (element) {
      case "earth":
        return <img src={earth} alt={earth} />;
      case "fire":
        return <img src={fire} alt={fire} />;
      case "water":
        return <img src={water} alt={water} />;
      case "light":
        return <img src={light} alt={light} />;
      case "basic":
        return <img src={basic} alt={basic} />;
      case "dark":
        return <img src={dark} alt={dark} />;
      default:
        return <h2>N/A</h2>;
    }
  };

  const Role = (role) => {
    switch (role) {
      case "warrior":
        return <img src={warrior} alt={warrior} />;
      case "range":
        return <img src={range} alt={range} />;
      case "support":
        return <img src={support} alt={support} />;
      case "tank":
        return <img src={tank} alt={tank} />;
      default:
        return <h2>N/A</h2>;
    }
  };

  return (
    <ul className="details">
      <li>
        <small>Element:</small>
        <div className="element">
          <h3>{heroe.element}</h3>
          {Element(heroe.element)}
        </div>
      </li>
      <li>
        <small>Specie:</small>
        <h3>{heroe.specie}</h3>
      </li>
      <li>
        <small>Role:</small>
        <div className="role">
          <h3>{heroe.role}</h3>
          {Role(heroe.role)}
        </div>
      </li>
      <li>
        <small>Rarity: </small>
        <h3>{heroe.rarity}</h3>
      </li>
    </ul>
  );
};

export default HeroDetails;
