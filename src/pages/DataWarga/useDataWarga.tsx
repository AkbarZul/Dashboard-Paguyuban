import { renderStatusBadgeWarga } from "@/helpers/chipColor";
import { useQuery } from "@tanstack/react-query";
import { getWarga } from "@/services/wargaService";
import { Column } from "@/components/Table/types";
import { Warga } from "./types";
import { useSearchParams } from "react-router";
import useFilterChange from "@/hooks/useFilterChange";

export const defaultFilters = {
  page: 1,
  limit: 10,
  search: "",
  block: "",
  status: 0,
};

const useDataWarga = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const { values, handleChange, resetFilters, filterParams, setFilterParams } = useFilterChange({
    defaultFilters,
  });

  const { data } = useQuery({
    queryKey: ["warga", page, filterParams.search, filterParams.status],
    queryFn: () =>
      getWarga({
        ...filterParams,
        page,
      }),
  });

  const columnConfig: Column<Warga>[] = [
    {
      header: "Nama Warga",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-slate-200 text-slate-700">
            {item.initials}
          </div>
          {item.nama}
        </div>
      ),
    },
    {
      header: "Blok / No",
      accessor: "blok_rumah",
    },
    {
      header: "Status",
      render: (item) => renderStatusBadgeWarga(item.status_hunian),
    },
    {
      header: "No. HP",
      accessor: "no_hp",
    },
    {
      header: "Tanggal Bergabung",
      accessor: "tanggal_bergabung",
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
    dataWarga: data?.data ?? [],
    columnConfig,
    tablePaginationProps: {
      totalPages: data?.totalPages,
      totalRows: data?.total,
    },
    values,
    handleChange,
    resetFilters,
    setFilterParams
  };
};

export default useDataWarga;
