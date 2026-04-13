import cn from "@/helpers/cn";
import { ButtonProps } from "./types";

const Button = ({ onClick, className, children, disabled, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(className)}>
      {children}
    </button>
  );
};

export default Button;
