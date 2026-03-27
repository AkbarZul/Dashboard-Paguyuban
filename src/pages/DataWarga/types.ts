export interface Warga {
  id: number;
  name: string;
  initials: string;
  nik: string;
  block: string;
  status: "Warga Tetap" | "Warga Kontrak";
  phone: string;
  familyCount: number;
  joinDate: string;
}
