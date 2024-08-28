import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./loginScreen.css";
import { useState } from "react";

function loginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userName, setUserName] = useState("");

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

  if (loginSuccess) {
    return (
      <div>
        <h1>Hej {userName}</h1>
        <div className="informaton-message">
          <p>
            Du vises nu en række spørgsmål. Du bedes svare ærligt, ellers er du
            et dræn. Dine svar sendes til den angivne mail ({email}), når alle
            spørgsmål er besvaret. Denne mail fungerer både som bekræftelse på,
            at svarene er modtaget korrekt og så du kan huske dine svar til
            selve pub crawlen.
          </p>

          <button
            className="continue-button"
            onClick={() => navigate("/questions/1")}
          >
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
