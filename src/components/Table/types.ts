import { ReactNode } from "react";
import { IPagination } from "./Pagination";

export type IData = object

export interface Column<T extends IData = IData> {
  header: string;
  accessor?: keyof T;
  render?: (row: T) => ReactNode;
  className?: string;
}

export interface TableProps<T extends IData = IData> {
  columns: Column<T>[];
  data: T[];
  tablePaginationProps: IPagination
}