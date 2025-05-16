import { Title } from "@shared/ui/Title";
import DashboardTable from "@widgets/dashboard-list/ui/DashboardTable";

const StatsListPage = () => {
  return (
    <div className="min-h-[85vh]">
      <Title name="STATS" />
      <div className="p-6">
        <DashboardTable mode="stats" />
      </div>
    </div>
  );
};
export default StatsListPage;
