import { DataWargaParams, DataWargaPayload } from "@/types/dataWargatype";
import { supabase } from "./supabase";

export const getWarga = async ({
  page = 1,
  limit = 10,
  search,
  status,
}: DataWargaParams) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("warga").select("*", { count: "exact" });

  if (search) {
    query = query.or(`nama.ilike.%${search}%,blok_rumah.ilike.%${search}%`);
  }

  if (status > 0) {
    query = query.eq("status_hunian", status);
  }

  query = query.order("created_at", { ascending: false });

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

export const getWargaById = async (id: number) => {
  const { data, error } = await supabase
    .from("warga")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

export const createWarga = async (payload: Partial<DataWargaPayload>) => {
  const { error } = await supabase.from("warga").insert(payload);

  if (error) throw error;
};

export const updateWarga = async (
  id: number,
  payload: Partial<DataWargaPayload>,
) => {
  const { error } = await supabase.from("warga").update(payload).eq("id", id);

  if (error) throw error;
};
