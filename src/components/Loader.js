import "./Loader.css";
import LoaderImg from "../img/Loader.png";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <img src={LoaderImg} alt="Loader img" />
    </div>
  );
};

export default Loader;
