import { RouteObject } from "react-router-dom";
import App from "./App";
import LoginScreen from "./Components/LogInScreen/loginScreen";
import QuestionsScreen from "./Components/QuestionsScreen/questionsScreen";
import ConfirmationScreen from "./Components/ConfirmationScreen/confirmationScreen";
import HomeScreen from "./Components/HomeScreen/homeScreen";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeScreen /> }, // Add this route for HomeScreen
      { path: "login", element: <LoginScreen /> },
      { path: "confirmation", element: <ConfirmationScreen /> },
      { path: "questions/:questionNumber", element: <QuestionsScreen /> }, // Dynamic question routing
    ],
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationScreen />,
  },
  {
    path: "/questions",
    element: <QuestionsScreen />,
  },
];
