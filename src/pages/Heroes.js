import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Loader from "../components/Loader";
import Swal from "sweetalert2";
import "./heroes.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Heroes() {
  useEffect(() => {
    document.title = "Heroes";
  }, []);

  const { result, error, loading } = useFetch(
    "https://api-guardian-tales.vercel.app/heroes"
  );

  let [searchParams, setSearchParams] = useSearchParams();

  if (error !== "") {
    return Swal.fire({
      title: "Error",
      text: error,
      icon: "warning",
    });
  }

  const handlerChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Navbar />
      <section className="heroes-container">
        <div className="heroes">
          <h2>HEROES</h2>

          <input
            className="search"
            type="text"
            placeholder="Enter name of a hero"
            value={searchParams.get("filter") || ""}
            onChange={handlerChange}
          />
          <div className="heroes-gallery">
            {loading ? (
              <Loader />
            ) : (
              <ul>
                {result
                  .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return false;

                    let name = item.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                  })
                  .map((item) => (
                    <li key={item._id}>
                      <Link to={`/heroes/${item.name}/`}>
                        <figure className="card-hero">
                          <img src={item.imgs.portrait} alt={item.name} />
                          <figcaption>{item.name}</figcaption>
                        </figure>
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
