import { useNavigate } from "react-router-dom";
import "./loginScreen.css";
import { useState } from "react";
import { useUserContext } from "../../contexts/userContext";

function loginScreen() {
  const navigate = useNavigate();
  const { userName, setUserName } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleLoginClick = () => {
    if (!email || !password) {
      return;
    }

    // Example check for password
    switch (password) {
      case "test":
        setLoginSuccess(true);
        setUserName("Test User");
        break;
      case "HÆTTETRØJE":
        setLoginSuccess(true);
        setUserName("Alfred");
        break;
      case "KVINDE":
        setLoginSuccess(true);
        setUserName("Mads");
        break;
      case "Kirke":
        setLoginSuccess(true);
        setUserName("Emil");
        break;
      case "MEDLEM":
        setLoginSuccess(true);
        setUserName("Andreas");
        break;
      case "ANKOMST":
        setLoginSuccess(true);
        setUserName("Gustav");
        break;
      case "FORSKER":
        setLoginSuccess(true);
        setUserName("Frederik");
        break;
      case "MASKE":
        setLoginSuccess(true);
        setUserName("CJ");
        break;
      default:
        alert("Forkert kodeord. Husk at skrive med store bogstaver.");
        break;
    }
  };

  const handleContinueClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigate("/questions/1");
    }, 1000);
  };

  if (loginSuccess) {
    return (
      <div>
        <h1>
          Hej
          <div className={animate ? "animate-username" : ""}>{userName}</div>
        </h1>
        <div className="informaton-message">
          <p>
            Du vises nu en række spørgsmål. Du bedes svare ærligt, ellers er du
            et dræn. Dine svar sendes til den angivne mail ({email}), når alle
            spørgsmål er besvaret. Denne mail fungerer både som bekræftelse på,
            at svarene er modtaget korrekt og så du kan huske dine svar til
            selve pub crawlen.
          </p>

          <button className="continue-button" onClick={handleContinueClick}>
            Fortsæt til spørgsmål
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="login-input">
        <label className="login-box">Email</label>
        <input
          type="email"
          className="text-box"
          placeholder="Emailadresse..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login-box">Kodeord</label>
        <input
          type="text"
          className="text-box"
          placeholder="KODEORD..."
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="continue-button"
        onClick={handleLoginClick}
        disabled={!email || !password}
      >
        Log ind
      </button>
    </div>
  );
}
export default loginScreen;
