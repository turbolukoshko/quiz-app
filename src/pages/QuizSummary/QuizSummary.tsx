import { FC } from "react";
import { Button } from "../../components/shared/Button/Button";
import { useQuizContext } from "../../hooks/useQuizContext";
import { Container } from "../../components/shared/Container/Container";
import { Step } from "../../types/types";
import { getQuizResult } from "../../utils/getQuizResult";
import { QuizSummaryDetails } from "../QuizSummaryDetails/QuizSummaryDetails";

type QuizResultProps = {
  gameStep: number;
  startQuiz: (step: number) => void;
};

export const QuizSummary: FC<QuizResultProps> = ({
  gameStep,
  startQuiz,
}): JSX.Element => {
  const { quizAnswer, clearQuizAnswer } = useQuizContext();

  const { countCorrectAnswer, countIncorrectAnswer, totalAnswered, score } =
    getQuizResult(quizAnswer);

  const restart = () => {
    clearQuizAnswer();
    startQuiz(Step.InitialScreen);
  };

  return (
    <>
      {gameStep === Step.SummaryScreen && (
        <Container>
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col items-start justify-center">
              <QuizSummaryDetails
                countCorrectAnswer={countCorrectAnswer}
                countIncorrectAnswer={countIncorrectAnswer}
                totalAnswered={totalAnswered}
                score={score}
              />
              <Button onClick={restart} title="Restart Quiz" />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
