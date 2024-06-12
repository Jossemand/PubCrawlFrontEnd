import { RouteObject } from "react-router-dom";
import App from "./App";
import LoginScreen from "./Components/LogInScreen/loginScreen";
import QuestionsScreen from "./Components/QuestionsScreen/questionsScreen";
import ConfirmationScreen from "./Components/ConfirmationScreen/confirmationScreen";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
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
