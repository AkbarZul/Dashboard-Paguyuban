import Button from "@/components/Button";
import SelectField from "@/components/ReactHookFields/SelectField";
import TextField from "@/components/ReactHookFields/TextField";
import Popup from "@/features/Popup";
import useTambahPengeluaran from "./useTambahPengeluaran";
import { usePopup } from "@/contexts/PopupContext";

const TambahPengeluaran = ({
  form,
  category,
}: ReturnType<typeof useTambahPengeluaran>) => {
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
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg"
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
          name="information"
          label="Keterangan Pengeluaran"
          placeholder="Contoh: Perbaikan Lampu Jalan"
          layoutClassname="w-full"
        />

        <div className="grid grid-cols-2 gap-3">
          <SelectField
            control={control}
            name="category"
            label="Kategori"
            placeholder="Isi Kategori"
            layoutClassname="w-full"
            list={category}
          />

          <TextField
            control={control}
            type="text"
            name="recipient"
            label="Penerima Dana"
            placeholder="Isi Penerima Dana"
            layoutClassname="w-full"
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
      </form>
    </Popup>
  );
};

export default TambahPengeluaran;
