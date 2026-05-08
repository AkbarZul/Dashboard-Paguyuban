import { PengeluaranParams, PengeluaranPayload } from "@/types/pengeluaranType";
import { supabase } from "./supabase";

export const getPengeluaran = async ({
  page = 1,
  limit = 10,
  search,
  category,
}: PengeluaranParams) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("pengeluaran").select("*", { count: "exact" });

  if (search) {
    query = query.or(`penerima.ilike.%${search}%`);
  }

  if (category > 0) {
    query = query.eq("kategori", category);
  }

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

export const createPengeluaran = async (payload: Partial<PengeluaranPayload>) => {
  const { error } = await supabase.from("pengeluaran").insert(payload);

  if (error) throw error;
};

export const getAllPengeluaran = async () => {
  const { data, error } = await supabase
    .from("pengeluaran")
    .select("*")
    .order("tanggal", { ascending: false });

  if (error) throw error;

  return data;
};
