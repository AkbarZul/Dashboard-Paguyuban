import InputText, { StandardTextFieldProps } from "../InputText/InputText";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { ReactHookFieldProps } from "./form-field";

type Props<
  TFormField extends FieldValues,
  TName extends FieldPath<TFormField> = FieldPath<TFormField>,
> = ReactHookFieldProps<TFormField, TName> & StandardTextFieldProps;

const TextField = <TFormField extends FieldValues>({
  control,
  name,
  rules,
  disabled,
  type,
  ...props
}: Props<TFormField>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputText
          type={type}
          {...props}
          id={field.name}
          name={field.name}
          value={field.value as string}
          onChange={(e) => field.onChange(e.target.value)}
          errorMessage={fieldState.error?.message}
          disabled={disabled}
        />
      )}
    />
  );
};

export default TextField;
