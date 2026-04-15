import Card from "@/components/Card";
import useDashboard from "./useDashboard";
import Table from "@/components/Table";
import Header from "@/components/Header";
import TableFilterLayout from "@/features/TableFilterLayout";
import SearchBar from "@/components/SearchBar";
import { filterListStatus } from "@/constans/masterdata";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";
import InputSelect from "@/components/Inputs/InputSelect";

const Dashboard = () => {
  const { cardData, transactions, columnConfig } = useDashboard();
  return (
    <div className="flex-1 p-4 lg:p-8">
      {/* Header Halaman */}
      <Header
        title="Ringkasan Kas Paguyuban Kav BRI"
        subTitle="Pantau kondisi keuangan dan partisipasi iuran warga bulan ini."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            summary={item.summary}
            layoutClassname="bg-white border-slate-200"
          />
        ))}
      </div>

      {/* Filter Bar */}
      <TableFilterLayout>
        <SearchBar placeholder="Cari nama warga, blok, atau transaksi..." />
        <InputSelect list={filterListStatus} layoutClassname="w-[250px]" />
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
