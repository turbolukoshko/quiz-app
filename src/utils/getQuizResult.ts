import { QuizAnswer } from "../context/QuizContext";

export const getQuizResult = (quizAnswer: QuizAnswer[]) => {
  let countCorrectAnswer = 0;
  let countIncorrectAnswer = 0;

  for (let i = 0; i < quizAnswer.length; i++) {
    if (quizAnswer[i].userAnswer === quizAnswer[i].correctAnswer) {
      countCorrectAnswer++;
    } else {
      countIncorrectAnswer++;
    }
  }

  const score = (countCorrectAnswer / quizAnswer.length) * 100;

  return {
    countCorrectAnswer,
    countIncorrectAnswer,
    totalAnswered: quizAnswer.length,
    score: `${score}%`,
  };
};
