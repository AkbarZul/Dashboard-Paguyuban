import Button from "@/components/Button";
import SelectField from "@/components/ReactHookFields/SelectField";
import TextField from "@/components/ReactHookFields/TextField";
import Popup from "@/features/Popup";
import useTambahIuran from "./useTambahIuran";
import { usePopup } from "@/contexts/PopupContext";
import DateField from "@/components/ReactHookFields/DateField";
import { metodePembayaran, statusPembayaran } from "@/constans/masterdata";
import { getOptionsBlock } from "./helper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IuranWargaPayload } from "@/types/iuranType";
import { createIuran } from "@/services/iuranService";
import { useMemo } from "react";

const TambahIuran = ({ form, data }: ReturnType<typeof useTambahIuran>) => {
  const { control, handleSubmit, getValues, reset, watch, setValue } = form;
  const { close } = usePopup();
  const queryClient = useQueryClient();

  const listWarga = getOptionsBlock(data?.data);

  const mappingData = useMemo(() => {
    const id = watch("warga_id");
    const list = listWarga.find((i) => i.value === id);

    if (list) {
      setValue("homeNumber", list?.block);
    }

    return {
      name: list?.label,
      block: list?.block,
    };
  }, [listWarga, watch, setValue]);

  const date = new Date().toJSON().slice(0, 10);

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

  return (
    <Popup
      title="Catatan Pembayaran Iuran"
      handleClose={handleClose}
      footer={
        <>
          <Button
            type="button"
            onClick={handleClose}
            className="px-4 py-2  bg-slate-50 hover:bg-slate-500 text-slate-700text-sm border rounded-lg"
          >
            Batal
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-slate-300 hover:bg-slate-500 text-slate-700 text-sm font-medium rounded-lg"
            onClick={handleSubmit(handleSubmitIuran)}
          >
            Simpan Data
          </Button>
        </>
      }
    >
      <form id="add-iuran-form" className="space-y-4">
        <SelectField
          control={control}
          name="warga_id"
          label="Nama Warga"
          placeholder="Masukan Nama Warga"
          layoutClassname="w-full"
          list={listWarga}
        />

        <div className="grid grid-cols-2 gap-3">
          <TextField
            control={control}
            type="text"
            name="homeNumber"
            label="Blok / Nomor"
            placeholder="Isi lok rumah"
            layoutClassname="w-full"
            disabled
          />

          <DateField
            control={control}
            name="periode"
            label="Periode Tagihan"
            placeholder="Isi Periode Tagihan"
            layoutClassname="w-full"
            type="month"
          />
        </div>

        <TextField
          control={control}
          type="text"
          name="nominal"
          label="Nominal (Rp)"
          placeholder="Isi Nominal"
          layoutClassname="w-full"
        />

        <div className="grid grid-cols-2 gap-3">
          <SelectField
            control={control}
            name="metode"
            label="Metode Pembayaran"
            placeholder="Isi Metode Pembayaran"
            layoutClassname="w-full"
            list={metodePembayaran}
          />

          <SelectField
            control={control}
            name="status"
            label="Status Pembayaran"
            placeholder="Isi Status Pembayaran"
            layoutClassname="w-full"
            list={statusPembayaran}
          />
        </div>
      </form>
    </Popup>
  );
};

export default TambahIuran;
