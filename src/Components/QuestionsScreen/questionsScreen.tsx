import { useNavigate } from "react-router-dom";
import NavigationBar from "../../NavigationBar";
import Header from "../Header/Header";
import "./questionsScreen.css";

function QuestionsScreen() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/confirmation");
  };

  return (
    <div>
      <Header />
      <h1>Questions</h1>

      <div>
        <form></form>
      </div>

      <button className="Login-button" onClick={handleLoginClick}>
        To Confirmation
      </button>
    </div>
  );
}
export default QuestionsScreen;
