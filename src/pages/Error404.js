import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import imgError from "../img/img_ERROR.png";
import "./Error404.css";

const Error404 = () => {
  useEffect(() => {
    document.title = "Error 404";
  }, []);

  return (
    <div id="error">
      <div className="error-cover"></div>
      <div className="error-content">
        <h2>ERROR 404</h2>
        <p>PAGE NO FOUND</p>
        <Link to="/">
          <button className="btn-error">Home</button>
        </Link>
        <img src={imgError} alt="guardian tales illustration" />
      </div>
    </div>
  );
};

export default Error404;
