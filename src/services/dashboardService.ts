import { DashboardParams } from "@/types/dashboardType";
import { supabase } from "./supabase";
import { STATUS_TRANSAKSI } from "@/constans/masterdata";

export const getDashboard = async ({
  page = 1,
  limit = 10,
  search,
}: DashboardParams) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("dashboard").select("*", { count: "exact" });

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  query = query.order("date", { ascending: false });

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

export const getDashboardSummary = async () => {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0-based
  const currentYear = now.getFullYear();

  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const { data, error } = await supabase
    .from("dashboard")
    .select("nominal, type, date, status");

  if (error) throw error;

  let totalPemasukan = 0;
  let totalPengeluaran = 0;
  let pemasukanBulanIni = 0;
  let pengeluaranBulanIni = 0;
  let totalMenunggak = 0;

  let saldoBulanIni = 0;
  let saldoBulanLalu = 0;

  data?.forEach((item) => {
    const nominal = Number(item.nominal) || 0;
    const date = item.date ? new Date(item.date) : null;

    if (!date) return;

    const isThisMonth =
      date.getMonth() === currentMonth && date.getFullYear() === currentYear;

    const isLastMonth =
      date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear;

    if (Number(item.status) === STATUS_TRANSAKSI.MENUNGGAK) {
      totalMenunggak += nominal;
    }

    if (item.type === "in" && Number(item.status) === STATUS_TRANSAKSI.LUNAS) {
      totalPemasukan += nominal;

      if (Number(item.status) === STATUS_TRANSAKSI.LUNAS && isThisMonth) {
        pemasukanBulanIni += nominal;
      }

      if (isThisMonth) saldoBulanIni += nominal;
      if (isLastMonth) saldoBulanLalu += nominal;
    }

    if (item.type === "out") {
      totalPengeluaran += nominal;

      if (isThisMonth) {
        pengeluaranBulanIni += nominal;
      }

      if (isThisMonth) saldoBulanIni -= nominal;
      if (isLastMonth) saldoBulanLalu -= nominal;
    }
  });


  const saldoKas = totalPemasukan - totalPengeluaran;

  let growth = 0;

  if (saldoBulanLalu !== 0) {
    growth = ((saldoBulanIni - saldoBulanLalu) / saldoBulanLalu) * 100;
  } else {
    growth = saldoBulanIni > 0 ? 100 : 0;
  }

  return {
    totalPemasukan,
    totalPengeluaran,
    saldoKas,
    pemasukanBulanIni,
    pengeluaranBulanIni,
    totalMenunggak,
    saldoBulanIni,
    saldoBulanLalu,
    growth,
    data
  };
};
