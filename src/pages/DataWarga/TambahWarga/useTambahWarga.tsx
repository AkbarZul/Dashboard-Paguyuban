import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./helper";
import { usePopup } from "@/contexts/PopupContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataWargaPayload } from "@/types/dataWargatype";
import { createWarga } from "@/services/wargaService";

const useTambahWarga = () => {
  const { control, getValues, reset, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const { close } = usePopup();
  const queryClient = useQueryClient();

  const saveWargaMutation = useMutation({
    mutationFn: (payload: DataWargaPayload) => createWarga(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["warga"],
      });
      close();
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const handleSubmitWarga = async () => {
    const payload = {
      nama: getValues("name"),
      blok_rumah: getValues("homeNumber"),
      status_hunian: getValues("status"),
      no_hp: getValues("phoneNumber"),
      tanggal_bergabung: getValues("joinDate"),
      initials: getValues("initials"),
    };
    await saveWargaMutation.mutate(payload);
  };
  const handleClose = () => {
    close();
    reset();
  };

  return {
    form: { control, ...form },
    handleSubmitWarga,
    handleClose
  };
};

export default useTambahWarga;
