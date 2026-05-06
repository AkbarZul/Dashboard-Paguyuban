import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues, getOptionsBlock } from "./helper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getWarga } from "@/services/wargaService";
import { usePopup } from "@/contexts/PopupContext";
import { useMemo } from "react";
import { IuranWargaPayload } from "@/types/iuranType";
import { createIuran } from "@/services/iuranService";
import { date } from "@/helpers/date";

const useTambahIuran = () => {
  const { control, getValues, reset, setValue, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const { data } = useQuery({
    queryKey: ["warga"],
    queryFn: () => getWarga({ limit: 100 }),
  });

  const { close } = usePopup();
  const queryClient = useQueryClient();

  const listWarga = getOptionsBlock(data?.data);
  const id = form.watch("warga_id");

  const mappingData = useMemo(() => {
    const list = listWarga.find((i) => i.value === id);

    if (list) {
      setValue("homeNumber", list?.block);
    }

    return {
      name: list?.label,
      block: list?.block,
    };
  }, [listWarga, id, setValue]);

  const saveIuranMutation = useMutation({
    mutationFn: (payload: IuranWargaPayload) => createIuran(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["iuran"],
      });
      close();
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmitIuran = async () => {
    const payload: IuranWargaPayload = {
      warga_id: getValues("warga_id"),
      nama_warga: mappingData.name,
      blok_rumah: mappingData.block,
      periode_tagihan: getValues("periode"),
      nominal: getValues("nominal"),
      tanggal_bayar: date,
      metode_bayar: getValues("metode"),
      status_pembayaran: getValues("status"),
    };

    await saveIuranMutation.mutate(payload);
  };

  const handleClose = () => {
    close();
    reset();
  };

  return {
    form: { control, ...form },
    handleSubmitIuran,
    handleClose,
    listWarga,
  };
};

export default useTambahIuran;
