import Button from "@/components/Button";
import Popup from "@/features/Popup";
import useTambahWarga from "./useTambahWarga";
import TextField from "@/components/ReactHookFields/TextField";
import SelectField from "@/components/ReactHookFields/SelectField";
import DateField from "@/components/ReactHookFields/DateField";
import { filterListStatusHunian as status } from "@/constans/masterdata";

const TambahWarga = ({
  form,
  handleSubmitWarga,
  handleClose,
}: ReturnType<typeof useTambahWarga>) => {
  const { control, handleSubmit } = form;

  return (
    <Popup
      title="Tambah Data Warga"
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
            onClick={handleSubmit(handleSubmitWarga)}
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

          <TextField
            control={control}
            type="text"
            name="initials"
            label="Inisial Warga"
            placeholder="contoh: BS"
            layoutClassname="w-full"
          />
        </div>

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

        <DateField
          control={control}
          name="joinDate"
          type="date"
          label="Tanggal Bergabung"
          layoutClassname="w-full"
        />
      </form>
    </Popup>
  );
};

export default TambahWarga;
