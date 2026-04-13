import TextField from "@/components/ReactHookFields/TextField";
import SummaryCard from "@/features/SummaryCard";

import { Save } from "lucide-react";
import Button from "@/components/Button";
import useProfileSection from "./useProfileSection";

const ProfileSection = ({ form }: ReturnType<typeof useProfileSection>) => {
  return (
    <div>
      <SummaryCard
        title="Profil Lingkungan"
        content={
          <form className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                control={form.control}
                type="text"
                name="chairman"
                label="Ketua Paguyuban"
                placeholder="Budi Santoso"
                layoutClassname="w-full"
              />

              <TextField
                control={form.control}
                type="text"
                name="viceChairman"
                label="Wakil Ketua Paguyuban"
                placeholder="Herman Jaya"
                layoutClassname="w-full"
              />

              <TextField
                control={form.control}
                type="text"
                name="rt"
                label="Nomor RT"
                placeholder="01"
                layoutClassname="w-full"
              />

              <TextField
                control={form.control}
                type="text"
                name="rw"
                label="Nomor RW"
                placeholder="05"
                layoutClassname="w-full"
              />
            </div>
            <TextField
              control={form.control}
              type="text"
              name="village"
              label="Kelurahan & Kecamatan"
              placeholder="Sukamaju, Kec. Cilodong, Kota Depok"
              layoutClassname="w-full"
            />
            <div className="flex justify-end pt-4 border-t border-slate-100 mt-4">
              <Button className="bg-slate-600 hover:bg-brand-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <Save className="w-4 h-4" /> Simpan Perubahan
              </Button>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default ProfileSection;
