export const STATUS_TRANSAKSI = {
  LUNAS: 1,
  MENUNGGU_VERIFIKASI: 2,
  MENUNGGAK: 3,
};

export const STATUS_WARGA = {
  WARGA_TETAP: 1,
  WARGA_KONTRAK: 2,
};

export const METODE_PEMBAYARAN = {
  TUNAI: 1,
  E_WALLET: 2,
  TRANSFER_BANK: 3,
};

export const MAPPING_STATUS_WARGA = {
  [STATUS_WARGA.WARGA_TETAP]: "Warga Tetap",
  [STATUS_WARGA.WARGA_KONTRAK]: "Warga Kontrak",
};

export const MAPPING_STATUS_TRANSAKSI = {
  [STATUS_TRANSAKSI.LUNAS]: "Lunas",
  [STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI]: "Menunggu Verifikasi",
  [STATUS_TRANSAKSI.MENUNGGAK]: "Menunggak"
};

export const MAPPING_METODE_PEMBAYARAN = {
  [METODE_PEMBAYARAN.TUNAI]: "Tunai",
  [METODE_PEMBAYARAN.E_WALLET]: "E - Wallet",
  [METODE_PEMBAYARAN.TRANSFER_BANK]: "Transfer Bank"
};

export const statusPembayaran = [
  {
    label: MAPPING_STATUS_TRANSAKSI[1],
    value: STATUS_TRANSAKSI.LUNAS,
  },
  {
    label: MAPPING_STATUS_TRANSAKSI[2],
    value: STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI,
  },
  {
    label: MAPPING_STATUS_TRANSAKSI[3],
    value: STATUS_TRANSAKSI.MENUNGGAK,
  },
];

 export const metodePembayaran = [
    {
      label: MAPPING_METODE_PEMBAYARAN[1],
      value: METODE_PEMBAYARAN.TUNAI,
    },
    {
      label: MAPPING_METODE_PEMBAYARAN[2],
      value: METODE_PEMBAYARAN.E_WALLET,
    },
    {
      label: MAPPING_METODE_PEMBAYARAN[3],
      value: METODE_PEMBAYARAN.TRANSFER_BANK,
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

export const filterListStatusHunian = [
  {
    label: MAPPING_STATUS_WARGA[1],
    value: STATUS_WARGA.WARGA_TETAP,
  },
  {
    label: MAPPING_STATUS_WARGA[2],
    value: STATUS_WARGA.WARGA_KONTRAK,
  },
];
