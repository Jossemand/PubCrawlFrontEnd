import beer from "../../assets/beer.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="header-bar">
          <a>
            <img src={beer} className="beer-logo" />
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
