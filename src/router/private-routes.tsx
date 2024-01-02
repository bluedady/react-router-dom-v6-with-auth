import { RouteObject, redirect } from "react-router-dom";

import UserProfile from "../pages/profile/user-profile";
import Settings from "../pages/profile/settings";

const privateRoutes: RouteObject[] = [
  {
    loader: async () => {
      const token = localStorage.getItem("TOKEN")?.trim();

      if (!token) {
        throw redirect("/auth/login");
      }

      return null;
    },
    children: [
      { path: "profile", element: <UserProfile /> },
      { path: "profile/settings", element: <Settings /> },
    ],
  },
];

export default privateRoutes;
