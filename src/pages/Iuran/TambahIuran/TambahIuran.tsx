import Button from "@/components/Button";
import SelectField from "@/components/ReactHookFields/SelectField";
import TextField from "@/components/ReactHookFields/TextField";
import Popup from "@/features/Popup";
import useTambahIuran from "./useTambahIuran";

import DateField from "@/components/ReactHookFields/DateField";
import { metodePembayaran, statusPembayaran } from "@/constans/masterdata";

import CurrencyField from "@/components/ReactHookFields/CurrencyField";

const TambahIuran = ({
  form,
  handleSubmitIuran,
  handleClose,
  listWarga,
}: ReturnType<typeof useTambahIuran>) => {
  const { control, handleSubmit } = form;

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
            placeholder="Isi blok rumah"
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

        <CurrencyField
          control={control}
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
