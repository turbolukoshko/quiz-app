import { Results } from "../types/types";

export const sortQuestions = (
  results: Results[] = [],
  questionCount: string
) => {
  const sortedQuestions = results.sort(() => 0.5 - Math.random()) || [];
  const randomQuestions = sortedQuestions?.slice(0, Number(questionCount));
  return randomQuestions;
};
