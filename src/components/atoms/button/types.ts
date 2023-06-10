import type { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  disabled?: boolean;
  variant?:
    | "primary"
    | "primary-outline"
    | "secondary"
    | "secondary-outline"
    | "error"
    | "error-outline"
    | "ghost"
    | "ghost-outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}
