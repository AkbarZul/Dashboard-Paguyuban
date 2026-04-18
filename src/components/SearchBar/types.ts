export interface SearchBarProps {
  placeholder: string;
  layoutClassName: string;
  iconClassName: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
