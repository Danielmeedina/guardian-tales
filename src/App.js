import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/Error404";
import Heroes from "./components/pages/Heroes";
import Hero from "./components/pages/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/heroes" element={<Heroes />} />
        <Route exact path="/heroes/:name" element={<Hero />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
