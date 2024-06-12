import { Link } from "react-router-dom";
import NavigationBar from "../../NavigationBar";
import Header from "../Header/Header";

function loginScreen() {
  return (
    <div>
      <Header />

      <NavigationBar />
      <h1>Login Screen</h1>
      <button className="Login-button">
        {" "}
        <Link to="/questions">To questions</Link>{" "}
      </button>
    </div>
  );
}
export default loginScreen;
