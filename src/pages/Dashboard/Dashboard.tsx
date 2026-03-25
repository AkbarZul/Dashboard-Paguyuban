import Card from "@/components/Card";
import useDashboard from "./useDashboard";

const Dashboard = () => {
  const { cardData } = useDashboard();
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Ringkasan Kas Paguyuban Kav BRI
        </h1>
        <p className="text-slate-500 mt-1">
          Pantau kondisi keuangan dan partisipasi iuran warga bulan ini.
        </p>
      </div>
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
    </div>
  );
};

export default Dashboard;
