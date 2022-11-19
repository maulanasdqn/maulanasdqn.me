import type { FC, ReactElement } from "react";
import type { ButtonProps } from "@util/Interfaces";

const Button: FC<ButtonProps> = ({ type, text }): ReactElement => {
  return (
    <button
      className="p-2 border-2 bg-white text-gray-600 border-green-500 font-medium w-auto rounded h-auto bg-gray-800"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
