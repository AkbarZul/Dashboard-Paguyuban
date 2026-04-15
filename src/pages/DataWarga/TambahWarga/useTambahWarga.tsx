import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./helper";

const useTambahWarga = () => {
  const { control, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const status = [
    {
      label: "Warga Tetap",
      value: 1,
    },
    {
      label: "Warga Kontrak",
      value: 2,
    },
  ];

  return {
    form: { control, ...form },
    status
  };
};

export default useTambahWarga;
