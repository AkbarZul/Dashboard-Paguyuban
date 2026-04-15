import { Controller, FieldPath, FieldValues } from "react-hook-form";
import InputSelect, {
  InputSelectProps,
} from "../Inputs/InputSelect/InputSelect";
import { ReactHookFieldProps } from "./form-field";

type Props<
  TFormField extends FieldValues,
  TValue,
  TName extends FieldPath<TFormField> = FieldPath<TFormField>,
> = ReactHookFieldProps<TFormField, TName> & InputSelectProps<TValue>;

const SelectField = <TFormField extends FieldValues, TValue>({
  control,
  name,
  rules,
  disabled,
  onChange,
  ...props
}: Props<TFormField, TValue>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputSelect<TValue>
          {...props}
          value={field.value}
          onChange={(value) => {
            field.onChange(value);
            onChange?.(value);
          }}
          errorMessage={fieldState.error?.message}
          disabled={disabled}
        />
      )}
    />
  );
};

export default SelectField;
