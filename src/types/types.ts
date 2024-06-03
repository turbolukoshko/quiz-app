export type Results = {
  category: string;
  type: "multiple" | "boolean" | "text";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Questions = {
  response_code: string;
  results: Results[];
};

export enum Step {
  InitialScreen,
  QuizPlaygroundScreen,
  SummaryScreen,
}

export enum InputType {
  multiple = "multiple",
  boolean = "boolean",
  text = "text",
}
