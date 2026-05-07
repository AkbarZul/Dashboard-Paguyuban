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

export const KATEGORI_PENGELUARAN = {
  OPERASIONAL_KEAMANAN: 1,
  LISTRIK_FASUM: 2,
  PEMELIHARAAN: 3,
  KEBERSIHAN: 4,
  KONSUMSI_ACARA: 5,
  LAIN_LAIN: 6,
};

export const TYPE = {
  IN: "in",
  OUT: "out",
};

export const MAPPING_STATUS_WARGA = {
  [STATUS_WARGA.WARGA_TETAP]: "Warga Tetap",
  [STATUS_WARGA.WARGA_KONTRAK]: "Warga Kontrak",
};

export const MAPPING_STATUS_TRANSAKSI = {
  [STATUS_TRANSAKSI.LUNAS]: "Lunas",
  [STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI]: "Menunggu Verifikasi",
  [STATUS_TRANSAKSI.MENUNGGAK]: "Menunggak",
};

export const MAPPING_METODE_PEMBAYARAN = {
  [METODE_PEMBAYARAN.TUNAI]: "Tunai",
  [METODE_PEMBAYARAN.E_WALLET]: "E - Wallet",
  [METODE_PEMBAYARAN.TRANSFER_BANK]: "Transfer Bank",
};

export const MAPPING_PENGELUARAN_KATEGORI = {
  [KATEGORI_PENGELUARAN.OPERASIONAL_KEAMANAN]: "Operasional Keamanan",
  [KATEGORI_PENGELUARAN.LISTRIK_FASUM]: "Listrik Fasum",
  [KATEGORI_PENGELUARAN.PEMELIHARAAN]: "Pemeliharaan",
  [KATEGORI_PENGELUARAN.KEBERSIHAN]: "Kebersihan",
  [KATEGORI_PENGELUARAN.KONSUMSI_ACARA]: "Konsumsi & Acara",
  [KATEGORI_PENGELUARAN.LAIN_LAIN]: "Lain-lain",
};

export const statusPembayaran = [
  {
    label: MAPPING_STATUS_TRANSAKSI[STATUS_TRANSAKSI.LUNAS],
    value: STATUS_TRANSAKSI.LUNAS,
  },
  {
    label: MAPPING_STATUS_TRANSAKSI[STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI],
    value: STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI,
  },
  {
    label: MAPPING_STATUS_TRANSAKSI[STATUS_TRANSAKSI.MENUNGGAK],
    value: STATUS_TRANSAKSI.MENUNGGAK,
  },
];

export const metodePembayaran = [
  {
    label: MAPPING_METODE_PEMBAYARAN[METODE_PEMBAYARAN.TUNAI],
    value: METODE_PEMBAYARAN.TUNAI,
  },
  {
    label: MAPPING_METODE_PEMBAYARAN[METODE_PEMBAYARAN.E_WALLET],
    value: METODE_PEMBAYARAN.E_WALLET,
  },
  {
    label: MAPPING_METODE_PEMBAYARAN[METODE_PEMBAYARAN.TRANSFER_BANK],
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
    label: MAPPING_STATUS_WARGA[STATUS_WARGA.WARGA_TETAP],
    value: STATUS_WARGA.WARGA_TETAP,
  },
  {
    label: MAPPING_STATUS_WARGA[STATUS_WARGA.WARGA_KONTRAK],
    value: STATUS_WARGA.WARGA_KONTRAK,
  },
];

export const pengeluaranKategori = [
  {
    label:
      MAPPING_PENGELUARAN_KATEGORI[KATEGORI_PENGELUARAN.OPERASIONAL_KEAMANAN],
    value: KATEGORI_PENGELUARAN.OPERASIONAL_KEAMANAN,
  },
  {
    label: MAPPING_PENGELUARAN_KATEGORI[KATEGORI_PENGELUARAN.LISTRIK_FASUM],
    value: KATEGORI_PENGELUARAN.LISTRIK_FASUM,
  },
  {
    label: MAPPING_PENGELUARAN_KATEGORI[KATEGORI_PENGELUARAN.PEMELIHARAAN],
    value: KATEGORI_PENGELUARAN.PEMELIHARAAN,
  },
  {
    label: MAPPING_PENGELUARAN_KATEGORI[KATEGORI_PENGELUARAN.KEBERSIHAN],
    value: KATEGORI_PENGELUARAN.KEBERSIHAN,
  },
  {
    label: MAPPING_PENGELUARAN_KATEGORI[KATEGORI_PENGELUARAN.KONSUMSI_ACARA],
    value: KATEGORI_PENGELUARAN.KONSUMSI_ACARA,
  },
  {
    label: MAPPING_PENGELUARAN_KATEGORI[KATEGORI_PENGELUARAN.LAIN_LAIN],
    value: KATEGORI_PENGELUARAN.LAIN_LAIN,
  },
];
