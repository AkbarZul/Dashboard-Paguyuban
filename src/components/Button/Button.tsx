import cn from "@/helpers/cn";
import { ButtonProps } from "./types";

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cn(className)}>
      {children}
    </button>
  );
};

export default Button;
