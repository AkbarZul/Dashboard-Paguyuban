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

  const status = [
    {
      label: "Lunas",
      value: 1,
    },
    {
      label: "Menunggu Verfikasi",
      value: 2,
    },
    {
      label: "Menunggak",
      value: 3,
    },
  ];

  const metodePembayaran = [
    {
      label: "Tunai",
      value: 1,
    },
    {
      label: "E - Wallet",
      value: 2,
    },
    {
      label: "Transfer Bank",
      value: 3,
    },
  ];

  return {
    form: { control, ...form },
    status,
    metodePembayaran
  };
};

export default useTambahIuran;
