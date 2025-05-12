import { DashboardInfoTitleProps } from "@entities/dashboard/model";

const DashboardInfoTitle = ({ isEdit }: DashboardInfoTitleProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <p>기본정보 </p>
      <p className="text-red-500 text-xs">
        {isEdit
          ? "* 입력한 대시보드에 대한 정보입니다."
          : "* DASHBOARD 기본정보를 입력해주세요."}
      </p>
    </div>
  );
};
export default DashboardInfoTitle;
