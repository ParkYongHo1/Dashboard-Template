import { Title } from "@shared/ui/Title";
import DashboardTable from "@widgets/dashboard-list/ui/DashboardTable";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[85vh]">
        <Title name="HOME" />
        <div className="p-6">
          <DashboardTable mode="home" />
        </div>
      </div>
    </>
  );
};
export default HomePage;
