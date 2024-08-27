import { useNavigate, useParams, Link, Outlet } from "react-router-dom";
import "./questionsScreen.css";

const questions = [
  {
    text: "Hvem brækker sig først?",
    optionalText: "",
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
    text: "Hvad er den bedste alder i forbindelse med kvinder?",
    optionalText: "",
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
    text: "Hvem vinder pub crawlen?",
    optionalText: "",
    type: "yesno",
    options: ["Hold 1", "Hold 2"],
  },
  {
    text: "Hvor mange skiver snus tager Emil inden stop nr. 4?",
    optionalText: "Emil har ikke fået dette spørgsmål",
    type: "multiple",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "9+"],
  },
  {
    text: "Starter Alfred på stop nr. 1?",
    optionalText: "",
    type: "yesno",
    options: ["Ja", "Nej"],
  },
  {
    text: "Tegnekonkurrence",
    optionalText: "",
    type: "drawing",
  },
];

function QuestionsScreen() {
  const navigate = useNavigate();
  const { questionNumber } = useParams<{ questionNumber: string }>();
  const questionIndex = parseInt(questionNumber ?? "1", 10) - 1;
  const currentQuestion = questions[questionIndex];

  const handleLoginClick = () => {
    navigate("/confirmation");
  };

  const handleAnswerClick = () => {
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
    return (currentQuestion.options ?? []).map((option, idx) => (
      <button key={idx} className="answer-button" onClick={handleAnswerClick}>
        {option}
      </button>
    ));
  };

  return (
    <div className="question-screen">
      <div className="content">
        <h1>Spørgsmål {questionIndex + 1}</h1>
        <p className="question-text">{currentQuestion.text}</p>
        <p className="optional-text">{currentQuestion.optionalText}</p>

        <div className="answers">{renderAnswerOptions()}</div>
        <div className="button-box">
          <button className="continue-button" onClick={handleLoginClick}>
            Indsend svar
          </button>
        </div>
      </div>

      <div className="question-nav">
        {questions.map((_, index) => (
          <Link to={`/questions/${index + 1}`} key={index} className="nav-link">
            <div
              className={`nav-box ${questionIndex === index ? "active" : ""}`}
            >
              Spørgsmål {index + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuestionsScreen;
