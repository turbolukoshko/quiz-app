import { useState } from "react";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuizAnswer, QuizContext } from "./context/QuizContext";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [quizAnswer, setQuizAnswer] = useState<QuizAnswer[]>([]);

  const updateQuizAnswer = (newQuizAnswer: QuizAnswer) => {
    setQuizAnswer((prev) => [...prev, newQuizAnswer]);
  };

  const clearQuizAnswer = () => {
    setQuizAnswer([]);
  };

  return (
    <QuizContext.Provider
      value={{ quizAnswer, setQuizAnswer, updateQuizAnswer, clearQuizAnswer }}
    >
      <ErrorBoundary>
        <Quiz />
      </ErrorBoundary>
    </QuizContext.Provider>
  );
}

export default App;
