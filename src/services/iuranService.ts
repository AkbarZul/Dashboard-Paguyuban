import { supabase } from "./supabase";
import { IuranWargaParams, IuranWargaPayload } from "@/types/iuranType";

export const getIuran = async ({
  page = 1,
  limit = 10,
  search,
  status,
}: IuranWargaParams) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("pemasukan").select("*", { count: "exact" });

  if (search) {
    query = query.or(
      `nama_warga.ilike.%${search}%,blok_rumah.ilike.%${search}%`,
    );
  }

  if (status > 0) {
    query = query.eq("status_pembayaran", status);
  }

  query = query.order("tanggal_bayar", { ascending: false });

  const { data, error, count } = await query.range(from, to);

  if (error) throw error;

  const total = count ?? 0;
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total,
    totalPages,
  };
};

export const createIuran = async (payload: Partial<IuranWargaPayload>) => {
  const { error } = await supabase.from("pemasukan").insert(payload);

  if (error) throw error;
};

export const getAllIuran = async () => {
  const { data, error } = await supabase
    .from("pemasukan")
    .select("*")
    .order("tanggal_bayar", { ascending: false });

  if (error) throw error;

  return data;
};
