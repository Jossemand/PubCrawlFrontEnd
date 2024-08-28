import { useNavigate, useParams, Link, Outlet } from "react-router-dom";
import "./questionsScreen.css";
import DrawingCanvas from "../DrawingCanvas/drawingCanvas";
import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/userContext";

const questions = [
  {
    text: "Hvem brækker sig først? (Hvis nogen)",
    optionalText: "(korrekt svar giver 1 point til dit pub crawl hold)",
    type: "multiple",
    options: [
      "Andreas",
      "CJ",
      "Emil",
      "Alfred",
      "Mads",
      "Frederik",
      "Gustav",
      "Joes",
    ],
  },
  {
    text: 'Hvad har Carl Johan svaret på dette spørgsmål: "Hvad er den bedste alder i forbindelse med kvinder?"',
    optionalText: "(korrekt svar giver 1 point til dit pub crawl hold)",
    type: "multiple",
    options: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23", "24-27"],
  },
  {
    text: "Hvor mange stop er der planlagt på ruten?",
    optionalText: "",
    type: "multiple",
    options: ["4", "5", "6", "7", "8", "9+"],
  },
  {
    text: "Hvor mange stop skal der til før ”mellem stop-flasken” er tom?",
    optionalText: "",
    type: "multiple",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "9+"],
  },
  {
    text: "Hvilket hold har flest point på stop nr. 4?",
    optionalText: "(korrekt svar giver 1 point)",
    type: "yesno",
    options: ["Mit hold", "Mit modstanderhold"],
  },
  {
    text: "Hvor mange skiver snus tager Emil inden stop nr. 4?",
    optionalText: "Emil har ikke fået dette spørgsmål",
    type: "multiple",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "9+"],
  },
  {
    text: "Starter Alfred på stop nr. 1?",
    optionalText: "Alfred har ikke fået dette spørgsmål",
    type: "yesno",
    options: ["Ja", "Nej"],
  },
  {
    text: "Tegnekonkurrence",
    optionalText:
      "Tegn en tegning af en hund. Bedste tegning giver 1 point til dit hold. Min mor er dommer.",
    type: "drawing",
  },
  {
    text: "Du skal slå alle pub crawlens medlemmer i røven inden stop nr. 2. Dette skal gøres uden nogen spørger hvorfor du slår folk i røven. (Folk skal ikke gætte at det er en opgave) Lykkes du, får dit hold 1 point.",
    optionalText:
      "Alle får en hemmelig opgave, der giver point til holdet, hvis opgaven succesfuldt fuldføres.",
    type: "assignment",
    options: ["modtaget"],
  },
];

function QuestionsScreen() {
  const navigate = useNavigate();
  const { questionNumber } = useParams<{ questionNumber: string }>();
  const questionIndex = parseInt(questionNumber ?? "1", 10) - 1;
  const currentQuestion = questions[questionIndex];

  const { userName } = useUserContext();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  const handleLoginClick = () => {
    navigate("/confirmation");
  };

  const handleAnswerClick = () => {
    // Mark the current question as answered
    const updatedAnswers = [...answeredQuestions];
    updatedAnswers[questionIndex + 1] = true;
    setAnsweredQuestions(updatedAnswers);

    // Navigate to the next question, if there is one
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      navigate(`/questions/${nextQuestionIndex + 1}`);
    } else {
      // Optionally, handle case where there are no more questions
      navigate("/confirmation");
    }
  };

  const renderAnswerOptions = () => {
    if (currentQuestion.type === "drawing") {
      return <DrawingCanvas />;
    }
    return (currentQuestion.options ?? []).map((option, idx) => (
      <button key={idx} className="answer-button" onClick={handleAnswerClick}>
        {option}
      </button>
    ));
  };

  return (
    <div className="question-screen">
      <div className="header">
        <h2> {userName}</h2>
      </div>
      <div className="content">
        <h1>Spørgsmål {questionIndex + 1}</h1>
        <p className="question-text">{currentQuestion.text}</p>
        <p className="optional-text">{currentQuestion.optionalText}</p>

        <div className="answers">{renderAnswerOptions()}</div>
        <div className="button-box">
          <button className="continue-button" onClick={handleAnswerClick}>
            Indsend svar
          </button>
        </div>
      </div>

      <div className="question-nav">
        {questions.map((_, index) => (
          <div key={index} className="nav-link">
            {answeredQuestions[index] || index === 0 ? (
              <Link to={`/questions/${index + 1}`}>
                <div
                  className={`nav-box ${
                    questionIndex === index ? "active" : ""
                  }`}
                >
                  Spørgsmål {index + 1}
                </div>
              </Link>
            ) : (
              <div className="nav-box disabled">Spørgsmål {index + 1}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsScreen;
