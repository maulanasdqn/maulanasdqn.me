export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  text: string | number;
  className?: string;
  to?: string;
  target?: string;
}
