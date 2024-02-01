import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalogue from "../pages/catalogue/catalogue";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/moregames",
    element: <Catalogue />,
  },
]);
