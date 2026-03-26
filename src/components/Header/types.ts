import { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  subTitle?: string;
  actionButton?: ReactNode;
  className?: string
}
