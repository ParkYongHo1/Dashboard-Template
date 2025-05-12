import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface DashboardInfo {
  id: number;
  title: string;
  dashboardId: string;
  description?: string;
}

export interface DashboardFormProps {
  mode: "add" | "edit";
}

export interface DashboardFormValues {
  title: string;
  dashboardId: string;
  description?: string;
}

export interface DashboardInfoTableProps {
  dashboardData?: {
    title: string;
    dashboardId: string;
    description?: string;
  };
}
export interface DashboardInfoTitleProps {
  isEdit: boolean;
  dashboardData?: {
    title: string;
    dashboardId: string;
    description?: string;
  };
}

export interface DashboardFormFieldsProps {
  register: UseFormRegister<DashboardFormValues>;
  errors: FieldErrors<DashboardFormValues>;
}

export interface DashboardToolTipProps {
  toolTipVisible: boolean;
}
export interface DashboardToolTipActionProps {
  toolTipVisible: boolean;
  setToolTipVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
