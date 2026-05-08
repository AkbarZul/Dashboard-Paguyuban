import { renderStatusBadgeWarga } from "@/helpers/chipColor";
import { useQuery } from "@tanstack/react-query";
import { getWarga } from "@/services/wargaService";
import { Column } from "@/components/Table/types";
import { Warga } from "./types";
import { useSearchParams } from "react-router";
import useFilterChange from "@/hooks/useFilterChange";
import { DataWargaParams } from "@/types/dataWargatype";
import Button from "@/components/Button";
import { usePopup } from "@/contexts/PopupContext";
import { useState } from "react";
import { formatDate } from "@/helpers/date";

export const defaultFilters: DataWargaParams = {
  page: 1,
  limit: 10,
  search: "",
  block: "",
  status: 0,
};

const useDataWarga = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const { open } = usePopup();

  const [id, setId] = useState<number>();

  const { values, handleChange, resetFilters, filterParams } = useFilterChange({
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

    const handleTambah = () => {
    setId(undefined);
    open();
  };

  const handleOpenModal = (id: number) => {
    setId(id);
    open();
  };

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
      render: (item) => formatDate(item.tanggal_bergabung),
    },
    {
      header: "Aksi",
      className: "text-center",
      render: (item) => (
        <div className="flex items-center gap-2">
          <Button
            className="p-2 text-blue-600 bg-blue-100 font-bold border hover:bg-blue-50 rounded-xl w-16"
            onClick={() => handleOpenModal(item.id)}
          >
            Edit
          </Button>
          <Button className="p-2 text-rose-600 bg-rose-100 font-bold hover:bg-rose-50 rounded-xl w-16">
            Hapus
          </Button>
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
    handleTambah,
    id,
    setId
  };
};

export default useDataWarga;
