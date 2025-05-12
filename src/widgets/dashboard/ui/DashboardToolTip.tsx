import info from "@assets/home/help.svg";
import { DashboardToolTipProps } from "@entities/dashboard/model";
const DashboardToolTip = ({ toolTipVisible }: DashboardToolTipProps) => {
  return (
    <>
      <img
        src={info}
        alt="안내 아이콘"
        className="w-[18px] h-[18px] object-contain mt-[1px] cursor-pointer"
        style={{ transform: "rotate(180deg)" }}
      />
      {toolTipVisible && (
        <div className="absolute w-68 text-xs bg-white text-black border border-gray-300 rounded-md p-2 shadow-md z-20 -top-14 left-1/2 transform -translate-x-1/2">
          <p>
            <span className="text-red-500">CREATED</span> : 추가 정보 입력이
            필요한 상태
          </p>
          <p>
            <span className="text-green-500">COMPLETED</span> : 모든 정보가
            입력된 상태
          </p>
        </div>
      )}
    </>
  );
};
export default DashboardToolTip;
