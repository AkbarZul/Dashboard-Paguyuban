// import { List } from "@/components/Select/types";

export const STATUS_TRANSAKSI = {
  LUNAS: "Lunas",
  SELESAI: "Selesai",
  MENUNGGU_VERIFIKASI: "Menunggu Verifikasi",
  MENUNGGAK: 'Menunggak'
};

export const STATUS_WARGA = {
  WARGA_TETAP: 1,
  WARGA_KONTRAK: 2
}

export const MAPPING_STATUS_WARGA = {
  [STATUS_WARGA.WARGA_TETAP]: "Warga Tetap",
  [STATUS_WARGA.WARGA_KONTRAK]: "Warga Kontrak"
}

export const filterListStatus = [
  {
    label: "Lunas",
    value: "Lunas",
  },
  {
    label: "Selesai",
    value: "Selesai",
  },
  {
    label: "Menunggu Verifikasi",
    value: "Menunggu verifikasi",
  },
  {
    label: "Menunggak",
    value: "Menunggak",
  },
];

export const filterListMonth = [
  {
    label: "Oktober",
    value: "Oktober",
  },
  {
    label: "September",
    value: "September",
  },
  {
    label: "Agustus",
    value: "Agustus",
  },
];

export const filterListYear = [
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "2025",
    value: "2025",
  },
  {
    label: "2026",
    value: "2026",
  },
];

export const filterListBlok = [
  {
    label: "Blok A",
    value: "a",
  },
  {
    label: "Blok B",
    value: "b",
  },
  {
    label: "Blok C",
    value: "c",
  },
    {
    label: "Blok D",
    value: "d",
  },
];
