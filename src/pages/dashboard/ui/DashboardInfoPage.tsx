import { DashboardInfoPageProps } from "@entities/dashboard/dashboard-info/model";
import DashboardInfoComponent from "@features/dashboard/dashboard-info/ui/DashboardInfoComponent";

const DashboardInfoPage = ({ mode }: DashboardInfoPageProps) => {
  return <DashboardInfoComponent mode={mode} />;
};

export default DashboardInfoPage;
