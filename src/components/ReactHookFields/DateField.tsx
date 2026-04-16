import InputDate, { InputDateProps } from "../Inputs/InputDate/InputDate";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ReactHookFieldProps } from "./form-field";

type Props<
  TFormField extends FieldValues,
  TName extends FieldPath<TFormField> = FieldPath<TFormField>,
> = ReactHookFieldProps<TFormField, TName> & InputDateProps;

const DateField = <TFormField extends FieldValues>({
  control,
  name,
  rules,
  disabled,
  type = 'date',
  ...props
}: Props<TFormField>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <InputDate
            {...props}
            id={field.name}
            name={field.name}
            type={type}
            value={field.value as string}
            onChange={(e) => field.onChange(e.target.value)}
            errorMessage={fieldState.error?.message}
            disabled={disabled}
          />
        );
      }}
    />
  );
};

export default DateField;
