import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";

export interface DashboardInfoPageProps {
  mode: "add" | "edit";
}
export interface DashboardInfoFormValues {
  dashboardName: string;
  dbName: string;
  description?: string;
}

export interface DashboardEditInfo {
  dashboardId: string;
  dashboardInfo?: {
    dashboardName: string;
    dbName: string;
    description?: string;
  };
  dashboardDetail?: {
    dashboardRow: {
      colName: string;
      colValue: string;
    };
    dashboardColumn?: {
      id: number;
      colName: string;
      alias: string;
      condition: string;
      value: string | number;
      aggregation: string;
    };
  };
}
export interface DashboardInfoComponentProps {
  isEdit: boolean;
  dashboardData?: DashboardEditInfo;
  register: UseFormRegister<DashboardInfoFormValues>;
  errors: FieldErrors<DashboardInfoFormValues>;
  handleSubmit: UseFormHandleSubmit<DashboardInfoFormValues>;
  onSubmit: (data: DashboardInfoFormValues) => void;
}

export type IsEditProps = Pick<DashboardInfoComponentProps, "isEdit">;
