import { FC } from "react";

type ButtonProps = {
  onClick: () => void;
  title: string;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  title,
  className = "",
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 ${className}`}
    >
      {title}
    </button>
  );
};
