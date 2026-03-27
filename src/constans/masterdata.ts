import { List } from "@/components/Select/types";

export const STATUS_TRANSAKSI = {
  LUNAS: "Lunas",
  SELESAI: "Selesai",
  MENUNGGU_VERIFIKASI: "Menunggu Verifikasi",
  MENUNGGAK: 'Menunggak'
};

export const STATUS_WARGA = {
  WARGA_TETAP: 'Warga Tetap',
  WARGA_KONTRAK: 'Warga Kontrak'
}

export const filterListStatus: List[] = [
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

export const filterListMonth: List[] = [
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

export const filterListBlok: List[] = [
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
