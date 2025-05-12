import { LinkButton } from "@shared/ui/LinkButton";
import edit from "@assets/home/edit.svg";
import init from "@assets/stats/init.svg";
import { DashboardTableProps } from "@entities/dashboard/model";

const DashboardTableItem = ({ mode }: DashboardTableProps) => {
  const PATH = mode === "home" ? `/edit-dashboard/` : `/stats/`;

  return (
    <tr>
      <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
        [DEV] 카디프 생명
      </td>
      <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
        2025-05-11 23:23:59
      </td>
      <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
        -
      </td>
      <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600 text-center">
        <span className={`text-red-500`}>CREATED</span>
      </td>

      <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600 text-center">
        <LinkButton path={PATH} type="icon">
          <img
            src={mode === "home" ? edit : init}
            alt={mode === "home" ? "수정 아이콘" : "입장 아이콘"}
            className="cursor-pointer w-[30px] h-[30px]"
          />
        </LinkButton>
      </td>
    </tr>
  );
};
export default DashboardTableItem;
