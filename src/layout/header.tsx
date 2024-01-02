import { Link } from "react-router-dom";

const navList = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "privacy-policy", path: "/privacy-policy" },
];

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        padding: "16px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "black",
        }}
      >
        <strong>React Router</strong>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {navList.map((item, i) => (
          <Link
            key={`nav-${i}`}
            to={item.path}
            style={{
              color: "black",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link
        to="/auth/login"
        style={{
          color: "black",
        }}
      >
        login
      </Link>
    </header>
  );
}
