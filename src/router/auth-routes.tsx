import { RouteObject } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register/register";
import OtpVerification from "../pages/auth/register/otp-verification";

const authRoutes: RouteObject[] = [
  { path: "auth/login", element: <Login /> },
  { path: "auth/register", element: <Register /> },
  { path: "auth/register/opt-verification", element: <OtpVerification /> },
];

export default authRoutes;
