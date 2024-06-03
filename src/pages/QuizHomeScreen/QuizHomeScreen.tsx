import { FC } from "react";
import { Button } from "../../components/shared/Button/Button";
import { Container } from "../../components/shared/Container/Container";
import { Select } from "../../components/shared/Select/Select";
import { Step } from "../../types/types";
import { QuizHomeScreenHeader } from "../QuizHomeScreenHeader/QuizHomeScreenHeader";

type QuizHomeScreenProps = {
  gameStep: number;
  startQuiz: (step: number) => void;
  setQuestionCount: (questionCount: string) => void;
};

export const QuizHomeScreen: FC<QuizHomeScreenProps> = ({
  gameStep,
  startQuiz,
  setQuestionCount,
}): JSX.Element => {
  return (
    <>
      {gameStep === Step.InitialScreen && (
        <Container>
          <QuizHomeScreenHeader />
          <Select setValue={setQuestionCount} />
          <Button
            onClick={() => startQuiz(Step.QuizPlaygroundScreen)}
            title="Start"
          />
        </Container>
      )}
    </>
  );
};
