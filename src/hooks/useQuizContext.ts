import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }

  return context;
};
