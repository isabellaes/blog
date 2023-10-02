import "../css/desktop.css";
import imgrigth from "../assets/j-lee-8RrWeI2OPEs-unsplash.jpg";
import imgmiddle from "../assets/sincerely-media-onLVa0nATFA-unsplash.jpg";
import imgleft from "../assets/j-lee-8RrWeI2OPEs-unsplash-left.jpg";
const Header = () => {
  return (
    <div className="header">
      <img src={imgleft} alt="clouds" />
      <img src={imgmiddle} alt="clouds" />
      <img src={imgrigth} alt="clouds" />
    </div>
  );
};

export default Header;
