import type { FC, ReactElement } from "react";
import type { ButtonProps } from "@util/Interfaces";

const Button: FC<ButtonProps> = ({
  type,
  text,
  className,
  onClick,
  to = "",
  target = "",
}): ReactElement => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {to === "" ? (
        text
      ) : (
        <a href={to} target={target}>
          {text}
        </a>
      )}
    </button>
  );
};

export default Button;
