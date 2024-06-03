import { useCallback, useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { QuizPlayground } from "../QuizPlayground/QuizPlayground";
import { QuizHomeScreen } from "../QuizHomeScreen/QuizHomeScreen";
import { QuizSummary } from "../QuizSummary/QuizSummary";
import { Questions, Results } from "../../types/types";
import { options } from "../../const/const";
import { Loader } from "../../components/shared/Loader/Loader";
import { sortQuestions } from "../../utils/sortQuestions";

export const Quiz = () => {
  const { data, loading, error, fetchData } = useQuery<Questions>(
    "../../../data.json",
    options
  );

  const { results } = data || {};

  const [quizQuestions, setQuizQuestions] = useState<Results[]>([]);
  const [gameStep, setGameStep] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<string>("");

  const getRandomQuestions = useCallback(
    (questionCount: string) => {
      const randomQuestions = sortQuestions(results, questionCount);
      setQuizQuestions(randomQuestions);
    },
    [results]
  );

  useEffect(() => {
    if (data) {
      getRandomQuestions(questionCount);
    }
  }, [data, getRandomQuestions, questionCount]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
  }

  const startQuiz = (step: number) => {
    fetchData();

    loading && getRandomQuestions(questionCount);
    setGameStep(step);
  };

  return (
    <main>
      <QuizHomeScreen
        startQuiz={startQuiz}
        gameStep={gameStep}
        setQuestionCount={setQuestionCount}
      />
      <QuizPlayground
        gameStep={gameStep}
        quizQuestions={quizQuestions}
        setGameStep={setGameStep}
        questionCount={questionCount}
      />
      <QuizSummary gameStep={gameStep} startQuiz={startQuiz} />
    </main>
  );
};
