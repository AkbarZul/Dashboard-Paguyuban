import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./helper";

const useTambahPengeluaran = () => {
  const { control, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const category = [
    {
      label: "Operasional Keamanan",
      value: 1,
    },
    {
      label: "Listrik Fasum",
      value: 2,
    },
    {
      label: "Pemeliharaan",
      value: 3,
    },
    {
      label: "Kebersihan",
      value: 4,
    },
    {
      label: "Konsumsi & Acara",
      value: 5,
    },
    {
      label: "Lain-lain",
      value: 6,
    },
  ];
  return {
    form: { control, ...form },
    category,
  };
};

export default useTambahPengeluaran;
