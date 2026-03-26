import cn from "@/helpers/cn";
import { ButtonProps } from "./types";

const Button = ({ onClick, className, children, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={cn(className)}>
      {children}
    </button>
  );
};

export default Button;
