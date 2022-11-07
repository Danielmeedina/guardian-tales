import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
        <p>Page not found</p>
        {/* <img
          src={imagenError}
          alt="error"
        /> */}
        <Link to="/">
          <button className="btn-error">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
