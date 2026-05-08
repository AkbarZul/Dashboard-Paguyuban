import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues, toTambahWargaForm } from "./helper";
import { usePopup } from "@/contexts/PopupContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataWargaPayload } from "@/types/dataWargatype";
import {
  createWarga,
  getWargaById,
  updateWarga,
} from "@/services/wargaService";
import { useEffect } from "react";
import { toastSuccess } from "@/components/Toast";

interface Props {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const useTambahWarga = ({ id, setId }: Props) => {
  const { data } = useQuery({
    queryKey: ["detail-warga", id],
    queryFn: () => getWargaById(id),
    enabled: !!id,
  });

  const { control, reset, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: "onChange",
  });
  const { close } = usePopup();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) {
      reset(toTambahWargaForm(data));
    }
  }, [data, reset]);

  const saveWargaMutation = useMutation({
    mutationFn: async (payload: DataWargaPayload) => {
      if (id) {
        return updateWarga(id, payload);
      }

      return createWarga(payload);
    },

    onSuccess: async () => {
      if (id) {
        toastSuccess("Berhasil", "Berhasil Update Data Warga!", "top-right");
      }
      toastSuccess("Berhasil", "Berhasil Menambah Data Warga!", "top-right");
      
      await queryClient.invalidateQueries({
        queryKey: ["warga"],
      });

      close();
      reset(defaultValues);
    },
  });

  const handleSubmitWarga = async (values: FormValues) => {
    const payload = {
      nama: values.name,
      blok_rumah: values.homeNumber,
      status_hunian: values.status,
      no_hp: values.phoneNumber,
      tanggal_bergabung: values.joinDate,
      initials: values.initials,
    };

    await saveWargaMutation.mutateAsync(payload);
  };

  const handleClose = () => {
    setId(undefined);
    close();
    reset(defaultValues);
  };

  return {
    form: { control, ...form },
    handleSubmitWarga,
    handleClose,
  };
};

export default useTambahWarga;
