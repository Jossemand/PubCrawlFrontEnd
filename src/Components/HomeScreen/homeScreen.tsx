import { useNavigate } from "react-router-dom";
import "./homeScreen.css";
function HomeScreen() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <button className="continue-button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
}

export default HomeScreen;
