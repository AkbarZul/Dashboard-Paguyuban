export interface PengeluaranParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: number;
}

export interface PengeluaranPayload {
  tanggal: string;
  keterangan: string;
  kategori: number;
  penerima: string;
  nominal: number;
}
