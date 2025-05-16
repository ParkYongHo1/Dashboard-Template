export interface DashboardToolTipProps {
  toolTipVisible: boolean;
}
export interface DashboardToolTipActionProps {
  toolTipVisible: boolean;
  setToolTipVisible: React.Dispatch<React.SetStateAction<boolean>>;
  mode: string;
}
export interface DashboardTableProps {
  mode: "home" | "stats";
}
