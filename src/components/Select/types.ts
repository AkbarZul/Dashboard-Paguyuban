export interface SelectProps {
  layoutClassname?: string;
  list: Array<List>;
  onChange?: (value: number | string) => void;
  placeholder?: string;
  value?: number | string;
}

export type List = {
  disabled?: boolean;
  label: string;
  value: number | string;
};
