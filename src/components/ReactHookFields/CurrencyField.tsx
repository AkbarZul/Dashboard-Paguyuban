
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ReactHookFieldProps } from "./form-field";
import InputCurrency, {
  InputCurrencyProps,
} from "../Inputs/InputCurrency/InputCurrency";


interface CurrencyFieldCustomProps {
  valueTransformer?: (value: number | string) => number | string
}

type Props<
  TFormField extends FieldValues,
  TName extends FieldPath<TFormField> = FieldPath<TFormField>,
> = ReactHookFieldProps<TFormField, TName> & InputCurrencyProps & CurrencyFieldCustomProps;


const CurrencyField = <TFormField extends FieldValues>({
  control,
  name,
  rules,
  disabled,
  valueTransformer,
  ...props
}: Props<TFormField>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputCurrency
          {...props}
          name={field.name}
          value={field.value as number}
           onChange={(value) =>
            field.onChange(valueTransformer ? valueTransformer(value) : value)
          }
          errorMessage={fieldState.error?.message}
          disabled={disabled}
        />
      )}
    />
  );
};

export default CurrencyField;
