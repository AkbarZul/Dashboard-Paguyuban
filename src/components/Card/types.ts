import { ReactNode } from "react";

export interface CardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  summary?: ReactNode;
}
