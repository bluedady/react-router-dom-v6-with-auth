import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import getAuthRoutes from "./auth-routes";
import getPublicRoutes from "./public-routes";
import getPrivateRoutes from "./private-routes";

import BaseLayout from "../layout/base-layout";

/*
You can assign different layouts for different types of routes, 
just like for auth routes you can create an another layout and assign it
*/

export default function Router() {
  // Store all the routes in a variable
  const allRoutes: RouteObject[] = [
    ...getAuthRoutes,
    ...getPublicRoutes,
    ...getPrivateRoutes,
  ];

  // Create a browser router
  const browserRouter = createBrowserRouter([
    {
      element: <BaseLayout />, // Assigning a base layout for all the routers
      children: allRoutes,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}
