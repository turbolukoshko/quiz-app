import { FC } from "react";
import { Results } from "../../types/types";
import { QuizMultipleInput } from "../QuizMultipleInput/QuizMultipleInput";
import { QuizTextInput } from "../QuizTextInput/QuizTextInput";

type QuizItemProps = {
  quizQuestions: Results[];
  currentQuestion: number;
  value: string;
  setValue: (value: string) => void;
};

export const QuizItem: FC<QuizItemProps> = ({
  quizQuestions,
  currentQuestion,
  value,
  setValue,
}) => {
  const { type, correct_answer, incorrect_answers } =
    quizQuestions[currentQuestion] || {};
  const answers = [...(incorrect_answers || []), correct_answer].sort(
    (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  );

  return (
    <>
      {type !== "text" && (
        <QuizMultipleInput
          answers={answers}
          value={value}
          setValue={setValue}
          type={type}
        />
      )}

      {type === "text" && <QuizTextInput value={value} setValue={setValue} />}
    </>
  );
};
