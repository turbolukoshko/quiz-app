import { FC } from "react";

type QuizSummaryDetailsProps = {
  countCorrectAnswer: number;
  countIncorrectAnswer: number;
  totalAnswered: number;
  score: string;
};

export const QuizSummaryDetails: FC<QuizSummaryDetailsProps> = ({
  countCorrectAnswer,
  countIncorrectAnswer,
  totalAnswered,
  score,
}): JSX.Element => {
  return (
    <>
      <h2 className="text-xl font-bold">SUMMARY</h2>
      <div className="my-6">
        <div className="flex">
          <p className="text-base text-start mb-0.5 mr-0.5">Correct:</p>
          <span className="font-semibold">{countCorrectAnswer}</span>
        </div>
        <div className="flex">
          <p className="text-base text-start mb-0.5 mr-0.5">Wrong:</p>
          <span className="font-semibold">{countIncorrectAnswer}</span>
        </div>
        <div className="flex">
          <p className="text-base text-start mb-0.5 mr-0.5">
            Questions answered:
          </p>
          <span className="font-semibold">{totalAnswered}</span>
        </div>

        <div className="flex">
          <p className="text-base text-start mb-0.5 mr-0.5">Final Score:</p>
          <span className="font-semibold">{score}</span>
        </div>
      </div>
    </>
  );
};
