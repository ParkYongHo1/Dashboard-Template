import { DashboardToolTipActionProps } from "@entities/dashboard/model";
import DashboardToolTipAction from "@features/dashboard/ui/DashboardToolTipAction";

const DashboardTableHeader = ({
  setToolTipVisible,
  toolTipVisible,
  mode,
}: DashboardToolTipActionProps) => {
  return (
    <tr className="bg-gray-50">
      <th className="border border-gray-300 px-4 py-3 font-bold text-center text-gray-600">
        DASHBOARD
      </th>
      <th className="border border-gray-300 px-4 py-3 font-bold text-center text-gray-600">
        생성일시
      </th>
      <th className="border border-gray-300 px-4 py-3 font-bold text-center text-gray-600">
        수정일시
      </th>
      <th className="flex justify-center gap-[5px] border-t border-gray-300 px-4 py-3 font-bold text-center text-gray-600 relative">
        <span>상태</span>
        <DashboardToolTipAction
          setToolTipVisible={setToolTipVisible}
          toolTipVisible={toolTipVisible}
          mode={mode}
        />
      </th>
      <th className="border border-gray-300 px-4 py-3 font-bold text-center text-gray-600">
        {mode === "home" ? "수정" : "통계보기"}
      </th>
    </tr>
  );
};
export default DashboardTableHeader;
