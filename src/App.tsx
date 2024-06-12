import "./App.css";
import Header from "./Components/Header/Header";
import HomeScreen from "./Components/HomeScreen/homeScreen";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <main>
        <HomeScreen />
      </main>
    </>
  );
}

export default App;
