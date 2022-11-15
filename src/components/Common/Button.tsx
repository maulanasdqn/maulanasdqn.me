import type { ButtonHTMLAttributes, FC, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  text: string;
}

const Button: FC<ButtonProps> = ({ type, text }): ReactElement => {
  return (
    <button
      className="p-2 border-2 bg-white text-gray-600 border-yellow-500 font-medium w-auto rounded h-auto"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
