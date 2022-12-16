import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Heroes from "./pages/Heroes";
import Hero from "./pages/Hero";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/heroes",
    element: <Heroes />,
  },
  {
    path: "/heroes/:name",
    element: <Hero />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
