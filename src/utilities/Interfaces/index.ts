import type { ProjectDataTypes } from "@util/Types";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  text: string | number;
  className?: string;
  to?: string;
  target?: string;
}

export interface ProjectInterfaces {
  ProjectData: Array<ProjectDataTypes>;
}
