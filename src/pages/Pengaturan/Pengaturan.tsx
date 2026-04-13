import Button from "@/components/Button";
import Header from "@/components/Header";

import SummaryCard from "@/features/SummaryCard/SummaryCard";

import { Save, Trash2 } from "lucide-react";

import ProfileSection from "./component/ProfileSection";
import useProfileSection from "./component/ProfileSection/useProfileSection";

const Pengaturan = () => {
  const profileSectionProps = useProfileSection()
  return (
    <div>
      <Header
        title="Pengaturan Sistem"
        subTitle="Konfigurasi profil lingkungan, nominal iuran, dan akses kepengurusan."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

        <div className="lg:col-span-2 space-y-6">
          {/* Card 1: Profil Lingkungan */}

          <ProfileSection {...profileSectionProps} />

          {/* Card 2: Nominal Iuran Dasar */}
          <SummaryCard
            title="Pengaturan Nominal Iuran Dasar"
            content={
              <div className="p-6 space-y-4 h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Iuran Warga Tetap (Rp)
                    </label>
                    <input
                      type="number"
                      defaultValue="50000"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Iuran Warga Kontrak (Rp)
                    </label>
                    <input
                      type="number"
                      defaultValue="50000"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Iuran Keamanan (Rp)
                    </label>
                    <input
                      type="number"
                      defaultValue="20000"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Iuran Kebersihan (Rp)
                    </label>
                    <input
                      type="number"
                      defaultValue="15000"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  *Nominal ini akan menjadi acuan saat melakukan generate
                  tagihan iuran otomatis setiap bulannya kepada seluruh warga
                  terdaftar.
                </p>
                <div className="flex justify-end pt-4 border-t border-slate-100 mt-4">
                  <Button className="bg-slate-700 hover:bg-brand-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                    <Save className="w-4 h-4" /> Simpan Pengaturan Iuran
                  </Button>
                </div>
              </div>
            }
          />
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6">
          {/* Card 3: Manajemen Admin */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Akses Pengurus</h3>
              <Button className="text-brand-600 text-sm font-medium hover:underline">
                Tambah Baru
              </Button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {/* User 1 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                      BS
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Budi Santoso
                      </p>
                      <p className="text-xs text-slate-500">
                        Ketua RT (Super Admin)
                      </p>
                    </div>
                  </div>
                </div>
                {/* User 2 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                      AW
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Ahmad Wijaya
                      </p>
                      <p className="text-xs text-slate-500">
                        Bendahara (Admin)
                      </p>
                    </div>
                  </div>
                  <Button className="text-slate-400 hover:text-rose-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                {/* User 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
                      SN
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Siti Nurhaliza
                      </p>
                      <p className="text-xs text-slate-500">
                        Sekretaris (Viewer)
                      </p>
                    </div>
                  </div>
                  <Button className="text-slate-400 hover:text-rose-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
