import { Title } from "@shared/ui/Title";
import DashboardTable from "@widgets/DashboardTable/ui/DashboardTable";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[85vh]">
        <Title name="HOME" />
        <div className="p-6">
          <DashboardTable />
        </div>
      </div>
    </>
  );
};
export default HomePage;
