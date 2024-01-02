import { Navigate } from "react-router-dom";

// Don't use it instead use loader to verify authentication or authorization
export default function ProtectedRouteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = localStorage.getItem("TOKEN");

  if (!token?.trim()) {
    return <Navigate to="/" replace />;
  }

  return children;
}
