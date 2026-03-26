import Card from "@/components/Card";
import useDashboard from "./useDashboard";
import { PlusCircle } from "lucide-react";
import Table from "@/components/Table";
import Header from "@/components/Header";
import Button from "@/components/Button";
import TableFilterLayout from "@/features/TableFilterLayout";
import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import { filterListStatus } from "@/constans/masterdata";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";

const Dashboard = () => {
  const { cardData, transactions, columnConfig } = useDashboard();
  return (
    <div className="flex-1 p-4 lg:p-8">
      {/* Header Halaman */}
      <Header
        title="Ringkasan Kas Paguyuban Kav BRI"
        subTitle="Pantau kondisi keuangan dan partisipasi iuran warga bulan ini."
        actionButton={
          <div>
            <div className="hidden sm:flex items-center gap-4 ml-auto">
              <Button className="bg-white hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <PlusCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Catat Pemasukan</span>
              </Button>
            </div>
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            summary={item.summary}
          />
        ))}
      </div>

      {/* Filter Bar */}
      <TableFilterLayout>
        <SearchBar placeholder="Cari nama warga, blok, atau transaksi..." />
        <Select
          layoutClassname="border border-slate-200 bg-slate-50 rounded-lg text-sm text-slate-700 py-2 px-3 outline-none cursor-pointer focus:border-brand-500"
          list={filterListStatus}
        />
      </TableFilterLayout>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <TransactionHeader />

        {/* Table */}
        <div className="p-4 md:p-0">
          <Table columns={columnConfig} data={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
