import { DashboardFormFieldsProps } from "@entities/dashboard/model";
import { Input } from "@shared/ui/Input";

const DashboardFormFields = ({
  register,
  errors,
}: DashboardFormFieldsProps) => {
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
        <tr>
          <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
            <span className="text-red-500">*</span> 대시보드 이름
          </td>
          <td className="border border-gray-300 px-4 py-4">
            <Input
              register={register("title", {
                required: "이름은 필수 입력입니다.",
              })}
              error={errors.title}
              placeholder="대시보드 이름을 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-4 font-bold text-gray-600">
            <span className="text-red-500">*</span> 대시보드 아이디
          </td>
          <td className="border border-gray-300 px-4 py-4">
            <Input
              register={register("dashboardId", {
                required: "대시보드 아이디는 필수 입력입니다.",
              })}
              error={errors.dashboardId}
              placeholder="대시보드 아이디를 입력해주세요"
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
  );
};
export default DashboardFormFields;
