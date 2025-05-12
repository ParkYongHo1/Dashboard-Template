import { DashboardInfoTableProps } from "@entities/dashboard/model";

const DashboardInfoTable = ({ dashboardData }: DashboardInfoTableProps) => {
  return (
    <table className="w-full border-collapse mt-4 table-fixed">
      <thead>
        <tr className="bg-gray-50">
          <th className="border border-gray-300 px-4 py-3 font-bold text-center text-gray-600">
            항목 이름
          </th>
          <th className="border border-gray-300 px-4 py-3 font-bold text-center text-gray-600">
            입력 값
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
            대시보드 제목
          </td>
          <td className="border border-gray-300 px-4 py-4">
            <p className="text-sm font-bold">
              {dashboardData?.title || "제목"}
            </p>
          </td>
        </tr>
        <tr className="border-b">
          <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
            대시보드 아이디
          </td>
          <td className="border border-gray-300 px-4 py-4">
            <p className="text-sm font-bold">
              {dashboardData?.dashboardId || "test"}
            </p>
          </td>
        </tr>
        <tr className="border-b">
          <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
            대시보드 설명
          </td>
          <td className="border border-gray-300 px-4 py-4">
            <p className="text-sm font-bold">{dashboardData?.description}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default DashboardInfoTable;
