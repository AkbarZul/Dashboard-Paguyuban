export const defaultValues = {
  warga_id: 0,
  homeNumber: "",
  periode: "",
  nominal: 0,
  metode: 0,
  status: 0,
};

export const getOptionsBlock = (
  data?: {
    id: number;
    nama: string;
    blok_rumah: string;
  }[],
) =>
  data?.length
    ? data.map((v) => ({ label: v.nama, value: v.id, block: v.blok_rumah }))
    : [];
