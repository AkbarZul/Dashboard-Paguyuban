import { Column } from "@/components/Table/types";
import { Warga } from "./types";
import { renderStatusBadgeWarga } from "@/helpers/chipColor";

const useDataWarga = () => {
  const dataWarga: Warga[] = [
    {
      id: 201,
      name: "Budi Santoso",
      initials: "BS",
      nik: "3171234567890001",
      block: "Blok A / 01",
      status: "Warga Tetap",
      phone: "0811-2233-4455",
      familyCount: 5,
      joinDate: "12 Jan 2015",
    },
    {
      id: 202,
      name: "Ahmad Subarjo",
      initials: "AS",
      nik: "3171234567890002",
      block: "Blok A / 12",
      status: "Warga Tetap",
      phone: "0812-3456-7890",
      familyCount: 4,
      joinDate: "05 Mar 2018",
    },
    {
      id: 203,
      name: "Siti Maimunah",
      initials: "SM",
      nik: "3171234567890003",
      block: "Blok B / 04",
      status: "Warga Tetap",
      phone: "0813-4567-8901",
      familyCount: 3,
      joinDate: "20 Feb 2019",
    },
    {
      id: 204,
      name: "Eka Putra",
      initials: "EP",
      nik: "3171234567890005",
      block: "Blok B / 09",
      status: "Warga Kontrak",
      phone: "0819-9988-7766",
      familyCount: 1,
      joinDate: "10 Agt 2023",
    },
    {
      id: 205,
      name: "Fajar Hidayat",
      initials: "FH",
      nik: "3171234567890006",
      block: "Blok C / 02",
      status: "Warga Tetap",
      phone: "0821-3344-5566",
      familyCount: 2,
      joinDate: "15 Jul 2020",
    },
    {
      id: 206,
      name: "Dedi Rahman",
      initials: "DR",
      nik: "3171234567890004",
      block: "Blok C / 10",
      status: "Warga Kontrak",
      phone: "0857-1122-3344",
      familyCount: 2,
      joinDate: "01 Sep 2023",
    },
  ];
  const columnConfig: Column<Warga>[] = [
    {
      header: "Nama Warga",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-slate-200 text-slate-700">
            {item.initials}
          </div>
          {item.name}
        </div>
      ),
    },
    {
      header: "NIK",
      accessor: "nik",
    },
    {
      header: "Blok / No",
      accessor: "block",
    },
    {
      header: "Status",
      render: (item) => renderStatusBadgeWarga(item.status),
    },
    {
      header: "No. HP",
      accessor: "phone",
    },
    {
      header: "Jumlah Keluarga",
      render: (item) => (
        <span className="text-slate-700 font-medium">
          {item.familyCount} Orang
        </span>
      ),
    },
    {
      header: "Tanggal Bergabung",
      accessor: "joinDate",
    },
    {
      header: "Aksi",
      className: "text-center",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
            Edit
          </button>
          <button className="p-1 text-rose-600 hover:bg-rose-50 rounded">
            Hapus
          </button>
        </div>
      ),
    },
  ];
  return {
    dataWarga,
    columnConfig,
  };
};

export default useDataWarga;
