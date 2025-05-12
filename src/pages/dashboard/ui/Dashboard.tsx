import { DashboardFormProps } from '@entities/dashboard/model';
import DashboardForm from "@features/dashboard/ui/DashboardForm";



const Dashboard = ({ mode }: DashboardFormProps) => {
  return <DashboardForm mode={mode} />;
};

export default Dashboard;
