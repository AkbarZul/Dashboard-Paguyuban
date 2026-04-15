import Button from "@/components/Button";
import { usePopup } from "@/contexts/PopupContext";
import Popup from "@/features/Popup";
import useTambahWarga from "./useTambahWarga";
import TextField from "@/components/ReactHookFields/TextField";
import SelectField from "@/components/ReactHookFields/SelectField";

const TambahWarga = ({ form, status }: ReturnType<typeof useTambahWarga>) => {
  const { control } = form;
  const { close } = usePopup();
  return (
    <Popup
      title="Tambah Data Warga"
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

        <TextField
          control={control}
          type="text"
          name="homeNumber"
          label="Blok / Nomor"
          placeholder="Blok A /01"
          layoutClassname="w-full"
        />

        <SelectField
          control={control}
          name="status"
          label="Status Hunian"
          placeholder="Isi Status Hunian"
          layoutClassname="w-full"
          list={status}
        />

        <TextField
          control={control}
          type="text"
          name="phoneNumber"
          label="No HP / Whatsapp"
          placeholder="Isi No HP"
          layoutClassname="w-full"
        />
      </form>
    </Popup>
  );
};

export default TambahWarga;
