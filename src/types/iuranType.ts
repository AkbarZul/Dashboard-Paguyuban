export interface IuranWargaParams {
  page?: number;
  limit?: number;
  search?: string;
  month?: string;
  status?: number
}


export interface IuranWargaPayload {
  warga_id: number
  nama_warga: string;
  blok_rumah: string;
  periode_tagihan: string;
  nominal: number;
  tanggal_bayar: string;
  metode_bayar: number;
  status_pembayaran: number
}