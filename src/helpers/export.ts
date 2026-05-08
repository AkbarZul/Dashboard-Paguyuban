import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { formatDate, formatDateMonth } from "./date";
import { formattedNumberToRp } from "./formatter";
import { Pemasukan } from "@/pages/Iuran/types";
import { Pengeluaran } from "@/pages/PengeluaranKas/types";


export const exportIuranToExcel = (data: Pemasukan[]) => {
  const formatted = data.map((item) => ({
    "Nama Warga": item.nama_warga,
    "Blok Rumah": item.blok_rumah,
    "Periode": formatDateMonth(item.periode_tagihan),
    "Nominal": formattedNumberToRp(item.nominal),
    "Tanggal Bayar": formatDate(item.tanggal_bayar),
  }));

  const worksheet = XLSX.utils.json_to_sheet(formatted);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Data Iuran - Paguyuban Kav BRI");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(file, "laporan-iuran.xlsx");
};


export const exportPengeluaranToExcel = (data: Pengeluaran[]) => {
  const formatted = data.map((item) => ({
    "Tanggal": formatDate(item.tanggal),
    "Deskripsi": item.keterangan,
    "Penerima": item.penerima,
    "Nominal": formattedNumberToRp(item.nominal),
  }));

  const worksheet = XLSX.utils.json_to_sheet(formatted);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Data Pengeluaran");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(file, "laporan-pengeluaran.xlsx");
};
