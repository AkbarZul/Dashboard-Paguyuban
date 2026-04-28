import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./helper";
import { useQuery } from "@tanstack/react-query";
import { getWarga } from "@/services/wargaService";

const useTambahIuran = () => {
  const { control, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const { data } = useQuery({
    queryKey: ["warga"],
    queryFn: () => getWarga({limit: 100}),
  });

  return {
    form: { control, ...form },
    data
  };
};

export default useTambahIuran;
