export interface DataWargaParams {
  page?: number;
  limit?: number;
  search?: string;
  block?: string;
  status?: number
}

export interface DataWargaPayload {
  nama: string;
  blok_rumah: string;
  status_hunian: number;
  no_hp: string;
  tanggal_bergabung: string;
  initials: string;
}
