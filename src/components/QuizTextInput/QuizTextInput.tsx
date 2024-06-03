import { FC } from "react";

type QuizTextInputProps = {
  value: string;
  setValue: (value: string) => void;
};

export const QuizTextInput: FC<QuizTextInputProps> = ({
  value,
  setValue,
}): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name="text"
        className="border px-2 py-1"
      />
    </div>
  );
};
