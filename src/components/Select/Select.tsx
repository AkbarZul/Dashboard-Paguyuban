import { SelectProps } from "./types";

const Select = ({ layoutClassname, list }: SelectProps) => {
  return (
    <select className={layoutClassname}>
      {list?.map((v) => (
        <option key={v.label} disabled={v.disabled}>
          {v.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
