import Button from "@/components/Button";
import SelectField from "@/components/ReactHookFields/SelectField";
import TextField from "@/components/ReactHookFields/TextField";
import Popup from "@/features/Popup";
import useTambahIuran from "./useTambahIuran";
import { usePopup } from "@/contexts/PopupContext";
import DateField from "@/components/ReactHookFields/DateField";

const TambahIuran = ({
  form,
  status,
  metodePembayaran,
}: ReturnType<typeof useTambahIuran>) => {
  const { control } = form;
  const { close } = usePopup();
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
          >
            Simpan Data
          </Button>
        </>
      }
    >
      <form id="add-warga-form" className="space-y-4">
        <TextField
          control={control}
          type="text"
          name="name"
          label="Nama Warga"
          placeholder="Masukan Nama Warga"
          layoutClassname="w-full"
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
            list={status}
          />
        </div>
      </form>
    </Popup>
  );
};

export default TambahIuran;
