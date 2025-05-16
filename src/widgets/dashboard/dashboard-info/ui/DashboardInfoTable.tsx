import { DashboardInfoComponentProps } from "@entities/dashboard/dashboard-info/model";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";

const DashboardInfoTable = ({
  isEdit,
  dashboardData,
  register,
  errors,
  handleSubmit,
  onSubmit,
}: DashboardInfoComponentProps) => {
  const dashboardName = dashboardData?.dashboardInfo?.dashboardName || "";
  const dbName = dashboardData?.dashboardInfo?.dbName || "";
  const description = dashboardData?.dashboardInfo?.description || "";

  const submitHandler = handleSubmit ? handleSubmit(onSubmit) : undefined;

  if (isEdit && dashboardData) {
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
              대시보드 이름
            </td>
            <td className="border border-gray-300 px-4 py-4">
              <p className="text-sm font-bold">{dashboardName}</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
              데이터베이스 이름
            </td>
            <td className="border border-gray-300 px-4 py-4">
              <p className="text-sm font-bold">{dbName}</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
              대시보드 설명
            </td>
            <td className="border border-gray-300 px-4 py-4">
              <p className="text-sm font-bold">{description}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <form onSubmit={submitHandler} className="mt-4 space-y-4">
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
          <tr>
            <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
              <span className="text-red-500">*</span> 대시보드 이름
            </td>
            <td className="border border-gray-300 px-4 py-4">
              <Input
                register={register("dashboardName", {
                  required: "이름은 필수 입력입니다.",
                })}
                error={errors.dashboardName}
                placeholder="대시보드 이름을 입력해주세요"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
              <span className="text-red-500">*</span> 데이터베이스 이름
            </td>
            <td className="border border-gray-300 px-4 py-4">
              <Input
                register={register("dbName", {
                  required: "데이터베이스 이름은 필수 입력입니다.",
                })}
                error={errors.dbName}
                placeholder="데이터베이스 이름을 입력해주세요"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
              대시보드 설명
            </td>
            <td className="border border-gray-300 px-4 py-4">
              <Input
                register={register("description")}
                error={errors.description}
                placeholder="대시보드 설명을 입력해주세요 (선택)"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center mt-[50px]">
        <Button name="저장" type="submit" variant="default" className="px-10" />
      </div>
    </form>
  );
};

export default DashboardInfoTable;
