import { FC } from "react";
import { Results } from "../../types/types";
import { decodeHtmlEntities } from "../../utils/decodeHtmlEntities";

type QuizHeaderProps = {
  currentQuestion: number;
  quizQuestions: Results[];
  category: string;
  difficulty: string;
  question: string;
};

export const QuizHeader: FC<QuizHeaderProps> = ({
  currentQuestion,
  quizQuestions,
  category,
  difficulty,
  question,
}): JSX.Element => {
  return (
    <>
      <p className="text-sm font-semibold">
        {currentQuestion + 1} / {quizQuestions.length}
      </p>

      <p className="text-xs mt-0.5">
        {category} ({difficulty})
      </p>
      <p className="text-base sm:text-lg text-start my-4">
        {decodeHtmlEntities(question)}
      </p>
    </>
  );
};
