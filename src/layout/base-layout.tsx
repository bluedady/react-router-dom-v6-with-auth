import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

// Outlet works similar to children; when you use this layout in the router, all the elements or pages will display under the layout section

export default function BaseLayout() {
  return (
    <div style={{ width: "100%", maxWidth: "1240px", margin: "auto" }}>
      <Header />
      <div style={{ padding: "16px", minHeight: "calc(100dvh - 135px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
