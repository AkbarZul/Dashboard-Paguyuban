import Button from "@/components/Button";
import SelectField from "@/components/ReactHookFields/SelectField";
import TextField from "@/components/ReactHookFields/TextField";
import Popup from "@/features/Popup";
import useTambahPengeluaran from "./useTambahPengeluaran";
import { pengeluaranKategori } from "@/constans/masterdata";
import CurrencyField from "@/components/ReactHookFields/CurrencyField";

const TambahPengeluaran = ({
  form,
  handleSubmitPengeluaran,
  handleClose,
}: ReturnType<typeof useTambahPengeluaran>) => {
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
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg"
            onClick={handleSubmit(handleSubmitPengeluaran)}
          >
            Simpan Pengeluaran
          </Button>
        </>
      }
    >
      <form id="add-warga-form" className="space-y-4">
        <TextField
          control={control}
          type="text"
          name="keterangan"
          label="Keterangan Pengeluaran"
          placeholder="Contoh: Perbaikan Lampu Jalan"
          layoutClassname="w-full"
        />

        <div className="grid grid-cols-2 gap-3">
          <SelectField
            control={control}
            name="kategori"
            label="Kategori"
            placeholder="Isi Kategori"
            layoutClassname="w-full"
            list={pengeluaranKategori}
          />

          <TextField
            control={control}
            type="text"
            name="penerima"
            label="Penerima Dana"
            placeholder="Isi Penerima Dana"
            layoutClassname="w-full"
          />
        </div>
        <CurrencyField
          control={control}
          name="nominal"
          label="Nominal (Rp)"
          placeholder="Isi Nominal"
          layoutClassname="w-full"
        />
      </form>
    </Popup>
  );
};

export default TambahPengeluaran;
