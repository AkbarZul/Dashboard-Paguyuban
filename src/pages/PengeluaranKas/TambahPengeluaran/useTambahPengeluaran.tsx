import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./helper";
import { usePopup } from "@/contexts/PopupContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PengeluaranPayload } from "@/types/pengeluaranType";
import { createPengeluaran } from "@/services/pengeluaranService";
import { date } from "@/helpers/date";

const useTambahPengeluaran = () => {
  const { control, getValues, reset, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const { close } = usePopup();

  const queryClient = useQueryClient();

  const savePengeluaranMutation = useMutation({
    mutationFn: (payload: PengeluaranPayload) => createPengeluaran(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["pengeluaran"],
      });
      close();
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmitPengeluaran = async () => {
    const payload: PengeluaranPayload = {
      tanggal: date,
      kategori: getValues("kategori"),
      keterangan: getValues("keterangan"),
      nominal: getValues("nominal"),
      penerima: getValues("penerima"),
    };

    await savePengeluaranMutation.mutate(payload);
  };

  const handleClose = () => {
    close();
    reset();
  };

  return {
    form: { control, ...form },
    handleSubmitPengeluaran,
    handleClose,
  };
};

export default useTambahPengeluaran;
