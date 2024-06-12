import { useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { useEffect, useState } from "react";
import { Steps } from "./steps";

export default function NavigationBar() {
  const location = useLocation();
  const [step, setStep] = useState<Steps>();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setStep(Steps.HomeScreen);
        break;
      case "/login":
        setStep(Steps.LoginScreen);
        break;
      case "/questions":
        setStep(Steps.QuestionsScreen);
        break;
      case "/confirmation":
        setStep(Steps.Confirmation);
        break;

      default:
        setStep(Steps.HomeScreen);
    }
  }, [location.pathname]);

  const decideClass = (thisStep: Steps) => {
    if (step === thisStep) {
      return "active";
    } else if (step && step > thisStep) {
      return "past";
    } else if (step && step === thisStep - 1) {
      return "previous";
    } else {
      return "future";
    }
  };

  return (
    <nav>
      <ul>
        <li className={decideClass(Steps.HomeScreen)}>
          <p className="bubble">Home Screen</p>
        </li>
        <div className={decideClass(Steps.HomeScreen) + "divider"}></div>
        <li className={decideClass(Steps.LoginScreen)}>
          <p className="bubble">Login</p>
        </li>
        <div className={decideClass(Steps.LoginScreen) + "divider"}></div>
        <li className={decideClass(Steps.QuestionsScreen)}>
          <p className="bubble">Questions</p>
        </li>
        <div className={decideClass(Steps.QuestionsScreen) + "divider"}></div>
        <li className={decideClass(Steps.Confirmation)}>
          <p className="bubble">Confirmation</p>
        </li>
      </ul>
    </nav>
  );
}
