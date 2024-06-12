import { Link } from "react-router-dom";
import NavigationBar from "../../NavigationBar";
import Header from "../Header/Header";

function QuestionsScreen() {
  return (
    <div>
      <Header />

      <h1>Questions</h1>
      <NavigationBar />
      <button className="Login-button">
        {" "}
        <Link to="/confirmation">To Confirmation</Link>{" "}
      </button>
    </div>
  );
}
export default QuestionsScreen;
