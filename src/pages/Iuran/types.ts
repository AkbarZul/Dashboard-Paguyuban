export interface Pemasukan {
  id: number;
  nama_warga: string;
  initials: string;
  blok_rumah: string;
  periode_tagihan: string;
  nominal: number;
  tanggal_bayar: string;
  metode_bayar: number;
  status_pembayaran: number;
}
