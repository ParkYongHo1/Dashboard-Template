import { DashboardFormProps } from '@entities/dashboard/model';
import DashboardForm from "@widgets/dashboard/ui/DashboardForm";



const Dashboard = ({ mode }: DashboardFormProps) => {
  return <DashboardForm mode={mode} />;
};

export default Dashboard;
