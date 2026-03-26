import { List } from "@/components/Select/types";

export const STATUS_TRANSAKSI = {
  LUNAS: "Lunas",
  SELESAI: "Selesai",
  MENUNGGU_VERIFIKASI: "Menunggu Verifikasi",
  MENUNGGAK: 'Menunggak'
};

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
