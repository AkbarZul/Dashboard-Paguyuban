import type { KeyboardEvent } from "react";

export const handleInputNumber = (
  e: KeyboardEvent<HTMLInputElement>,
  options?: { allowNegative?: boolean },
): void => {
  const allowedKeys =
    `1,2,3,4,5,6,7,8,9,0,Backspace,Delete,Tab${options?.allowNegative ? ",-" : ""}`.split(
      ",",
    );
  if (!allowedKeys.includes(e.key) && e.key !== ",") {
    e.preventDefault();
  }
};

export default { handleInputNumber };
