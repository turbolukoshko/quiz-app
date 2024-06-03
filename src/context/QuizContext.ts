import { createContext } from "react";

export type QuizAnswer = {
  userAnswer: string;
  correctAnswer: string;
};

export type QuizContextTypes = {
  quizAnswer: QuizAnswer[];
  setQuizAnswer: React.Dispatch<React.SetStateAction<QuizAnswer[]>>;
  updateQuizAnswer: (newQuizAnswer: QuizAnswer) => void;
  clearQuizAnswer: () => void;
};

export const QuizContext = createContext<QuizContextTypes | undefined>(
  undefined
);
