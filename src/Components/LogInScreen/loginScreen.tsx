import { useNavigate } from "react-router-dom";
import NavigationBar from "../../NavigationBar";
import Header from "../Header/Header";
import "./loginScreen.css";

function loginScreen() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/questions");
  };
  return (
    <div>
      <Header />

      <h1>Login Screen</h1>
      <div className="login-input">
        <label className="login-box">Username</label>
        <input type="text" />
        <label className="login-box">Password</label>
        <input type="password" />
      </div>

      <button className="Login-button" onClick={handleLoginClick}>
        To Questions
      </button>
    </div>
  );
}
export default loginScreen;
