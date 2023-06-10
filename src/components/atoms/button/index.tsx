import type { FC, ReactElement } from "react";
import type { IButtonProps } from "./types";
import { match, P } from "ts-pattern";
import clsx from "clsx";

export const Button: FC<IButtonProps> = ({
  variant = "primary",
  size = "md",
  href = undefined,
  ...props
}): ReactElement => {
  const v = clsx({
    "bg-blue-400 text-white": variant === "primary",
    "bg-green-500 text-white": variant === "secondary",
    "bg-red-500 text-white": variant === "error",
    "bg-transparent text-gray-700": variant === "ghost",
    "border border-blue-400 bg-white text-blue-400":
      variant === "primary-outline",
    "border border-green-500 bg-white text-green-400":
      variant === "secondary-outline",
    "border border-red-500 bg-white text-red-500": variant === "error-outline",
    "border border-white text-gray-700": variant === "ghost-outline",
  });

  const s = clsx({
    "p-2": size === "sm",
    "px-3 py-2": size === "md",
    "px-4 py-2": size === "lg",
  });

  const c = clsx(
    "rounded-lg h-auto w-auto appearence-none shadow-sm hover:opacity-80",
    v,
    s
  );

  return match({
    href,
  })
    .with(
      {
        href: P.not(P.nullish),
      },
      ({ href }) => (
        <a href={href}>
          <button className={c} {...props}>
            {props.children}
          </button>
        </a>
      )
    )
    .with(
      {
        href: P.nullish,
      },
      () => (
        <button className={c} {...props}>
          {props.children}
        </button>
      )
    )
    .otherwise(() => <></>);
};
