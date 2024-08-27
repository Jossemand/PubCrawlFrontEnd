import "./App.css";
import Header from "./Components/Header/Header";
import HomeScreen from "./Components/HomeScreen/homeScreen";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renders the child route component */}
      </main>
    </>
  );
}

export default App;
