import "./carrousel.css";

const Carrousel = ({ data }) => {
  return (
    <div className="container">
      <ul className="menu">
        {data.map((el, index) => (
          <a key={index} href={`#slide${index + 1}`}>
            <div className="btn"></div>
          </a>
        ))}
      </ul>
      <ul className="slider">
        {data.map((el, index) => (
          <li id={`slide${index + 1}`} key={index}>
            <img src={el} alt="." loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrousel;
