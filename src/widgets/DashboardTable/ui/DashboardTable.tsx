import { useState } from "react";
import DashboardTableItem from "./DashboardTableItem";
import DashboardTableHeader from "./DashboardTableHeader";
const DashboardTable = () => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <table className="w-full border-collapse table-auto">
      <thead>
        <DashboardTableHeader
          setToolTipVisible={setToolTipVisible}
          toolTipVisible={toolTipVisible}
        />
      </thead>
      <tbody>
        <DashboardTableItem />
      </tbody>
    </table>
  );
};
export default DashboardTable;
