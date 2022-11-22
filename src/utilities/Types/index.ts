import type { ReactNode } from "react";

export type CommonTypes = {
  children: ReactNode;
};

export type ProjectDataTypes = {
  name: string;
  description: string;
  html_url: string | URL | null | undefined;
};
