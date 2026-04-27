import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./helper";

const useTambahIuran = () => {
  const { control, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  return {
    form: { control, ...form },
  };
};

export default useTambahIuran;
