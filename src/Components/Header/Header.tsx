import beer from "../../assets/beer.png";

function Header() {
  return (
    <>
      <header>
        <div>
          <a>
            <img src={beer} className="beer-logo" />
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
