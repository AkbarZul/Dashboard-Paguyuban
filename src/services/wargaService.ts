import { DataWargaParams } from "@/types/dataWargatype";
import { supabase } from "./supabase";

export const getWarga = async ({
  page = 1,
  limit = 10,
  search,
  block,
}: DataWargaParams) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("warga").select("*", { count: "exact" });

  if (search) {
    query = query.or(`name.ilike.%${search}%,block.ilike.%${search}%`);
  }

  if (block) {
    query = query.eq("block", block);
  }

  const { data, error, count } = await query.range(from, to);

  if (error) throw error;

  return {
    data,
    total: count,
  };
};

export const createWarga = async (payload: { name: string; nik: string }) => {
  const { error } = await supabase.from("warga").insert(payload);

  if (error) throw error;
};
