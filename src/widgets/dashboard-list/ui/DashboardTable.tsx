import { useState } from "react";
import DashboardTableItem from "./DashboardTableItem";
import DashboardTableHeader from "./DashboardTableHeader";
import { DashboardTableProps } from "@entities/dashboard/dashboard-list/model";

const DashboardTable = ({ mode }: DashboardTableProps) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <table className="w-full border-collapse table-auto">
      <thead>
        <DashboardTableHeader
          setToolTipVisible={setToolTipVisible}
          toolTipVisible={toolTipVisible}
          mode={mode}
        />
      </thead>
      <tbody>
        <DashboardTableItem mode={mode} />
      </tbody>
    </table>
  );
};
export default DashboardTable;
