import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <h1>Home Screen</h1>
      <button className="Login-button">
        {" "}
        <Link to="/login">Login</Link>{" "}
      </button>
    </div>
  );
}

export default HomeScreen;
