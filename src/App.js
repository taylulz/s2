import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Feelings!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/feelings">Feelings</Link> |{" "}
        <Link to="/needs">Needs</Link>
      </nav>
      <Outlet />
    </div>
  );
}