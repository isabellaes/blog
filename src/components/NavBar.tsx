import "../css/desktop.css";
import "../css/tablet.css";
import "../css/mobile.css";
import { NavLink } from "react-router-dom";
import { categorys } from "../utils/types";
import img from "../assets/blogheaders.png";

const NavBar = () => {
  return (
    <div className="NavBarHeader">
      <div className="header">
        <img src={img} alt="clouds" />
      </div>

      <div className="navbar">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <p>Hem</p>
        </NavLink>

        {categorys.flatMap((element) => (
          <NavLink
            to={`/category/${element.id}`}
            style={{ textDecoration: "none" }}
            key={element.id}
          >
            <p>{element.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
