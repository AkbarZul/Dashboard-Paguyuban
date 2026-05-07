import { Warga } from "../types";

export const defaultValues = {
  name: "",
  homeNumber: "",
  status: 0,
  phoneNumber: "",
  joinDate: "",
  initials: "",
};

export const toTambahWargaForm = (data: Warga) => {
  return {
    name: data?.nama ?? "",
    homeNumber: data?.blok_rumah ?? "",
    status: data?.status_hunian ?? 0,
    phoneNumber: data?.no_hp ?? "",
    joinDate: data?.tanggal_bergabung ?? "",
    initials: data?.initials ?? "",
  };
};
