import "../css/desktop.css";
import { NavLink } from "react-router-dom";
import { categorys } from "../utils/types";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <p>Hem</p>
      </NavLink>

      {categorys.flatMap((element) => (
        <NavLink
          to={`/category/${element.id}`}
          style={{ textDecoration: "none" }}
        >
          <p>{element.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
