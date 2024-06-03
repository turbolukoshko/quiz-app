import { FC } from "react";
import { inputName } from "../../utils/getInputName";

type QuizMultipleInputProps = {
  type: string;
  answers: string[];
  value: string;
  setValue: (value: string) => void;
};

export const QuizMultipleInput: FC<QuizMultipleInputProps> = ({
  type,
  answers,
  value,
  setValue,
}): JSX.Element => {
  return (
    <div>
      <ul className="flex flex-col items-start">
        {answers.map((answer, index) => {
          return (
            <li key={answer + index} className="my-0.5">
              <input
                type="radio"
                id={answer}
                value={answer}
                checked={value === answer}
                onChange={(e) => setValue(e.target.value)}
                name={inputName(type)}
              />
              <label htmlFor={answer} className="ml-1.5 cursor-pointer">
                {answer}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
