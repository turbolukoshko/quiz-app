import { FC, useState } from "react";
import { Button } from "../../components/shared/Button/Button";
import { useQuizContext } from "../../hooks/useQuizContext";
import { Container } from "../../components/shared/Container/Container";
import { QuizItem } from "../../components/QuizItem/QuizItem";
import { Results, Step } from "../../types/types";
import { QuizHeader } from "../../components/QuizHeader/QuizHeader";

type QuizPlayground = {
  gameStep: number;
  quizQuestions: Results[];
  setGameStep: (step: number) => void;
  questionCount: string;
};

export const QuizPlayground: FC<QuizPlayground> = ({
  gameStep,
  quizQuestions,
  setGameStep,
}): JSX.Element => {
  const context = useQuizContext();
  const [value, setValue] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const { updateQuizAnswer } = context;

  const { question, difficulty, category, correct_answer } =
    quizQuestions[currentQuestion] || {};

  const next = () => {
    if (!value) {
      setValidationError("This field is required!");
      return null;
    }

    const updateAnswer = {
      userAnswer: value,
      correctAnswer: correct_answer,
    };

    updateQuizAnswer(updateAnswer);

    setCurrentQuestion((prev) => prev + 1);
    currentQuestion + 1 >= quizQuestions.length && setGameStep(2);
    setValue("");
    setValidationError("");
  };

  return (
    <>
      {gameStep === Step.QuizPlaygroundScreen && (
        <Container>
          <div className="w-10/12 h-1/2 flex justify-center sm:w-1/2 flex flex-col items-start my-0 mx-auto">
            <div className="flex flex-col items-start fixed-grow relative grow top-0">
              <QuizHeader
                currentQuestion={currentQuestion}
                quizQuestions={quizQuestions}
                category={category}
                difficulty={difficulty}
                question={question}
              />

              <QuizItem
                value={value}
                setValue={setValue}
                quizQuestions={quizQuestions}
                currentQuestion={currentQuestion}
              />
              <Button onClick={next} title="Next" className="mt-8" />
              <p className="text-sm text-red-700 h-3.5 mt-2">
                {validationError}
              </p>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
