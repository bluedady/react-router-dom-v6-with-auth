import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import PrivacyPolicy from "../pages/privacy-policy";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    loader: async () => {
      const request = await fetch("https://fakestoreapi.com/products/1");

      if (!request.ok) {
        // If any error occurs during api call, you can redirect anywhere you want
        // throw redirect("/")
      }

      const response = await request.json();
      return response;
    },
    element: <Home />,
  },
  { path: "about", element: <About /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
];

export default publicRoutes;
