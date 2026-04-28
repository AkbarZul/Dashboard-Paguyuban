import Button from "@/components/Button";
import SelectField from "@/components/ReactHookFields/SelectField";
import TextField from "@/components/ReactHookFields/TextField";
import Popup from "@/features/Popup";
import useTambahIuran from "./useTambahIuran";
import { usePopup } from "@/contexts/PopupContext";
import DateField from "@/components/ReactHookFields/DateField";
import { metodePembayaran, statusPembayaran } from "@/constans/masterdata";
import { getOptions } from "@/helpers/formatter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IuranWargaPayload } from "@/types/iuranType";
import { createIuran } from "@/services/iuranService";

const TambahIuran = ({ form, data }: ReturnType<typeof useTambahIuran>) => {
  const { control, handleSubmit, getValues, reset } = form;
  const { close } = usePopup();
  const queryClient = useQueryClient();

  const listWarga = getOptions(data?.data);

  const mappingName = (id?: number) => {
    return listWarga.find((i) => i.value === id)?.label ?? "";
  };

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

  const date = new Date()

  const handleSubmitIuran = () => {
    const payload: IuranWargaPayload = {
      warga_id: getValues('warga_id'),
      nama_warga: mappingName(form.watch("warga_id")),
      blok_rumah: getValues('homeNumber'),
      periode_tagihan: getValues('periode'),
      nominal: getValues('nominal'),
      tanggal_bayar: date.getDate().toLocaleString(),
      metode_pembayaran: getValues('metode'),
      status_pembayaran: getValues('status')
    };
  };

  return (
    <Popup
      title="Catatan Pembayaran Iuran"
      footer={
        <>
          <Button
            type="button"
            onClick={close}
            className="px-4 py-2  bg-slate-50 hover:bg-slate-500 text-slate-700text-sm border rounded-lg"
          >
            Batal
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-slate-300 hover:bg-slate-500 text-slate-700 text-sm font-medium rounded-lg"
            onClick={handleSubmitIuran}
          >
            Simpan Data
          </Button>
        </>
      }
    >
      <form id="add-warga-form" className="space-y-4">
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
            placeholder="Blok A /01"
            layoutClassname="w-full"
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
