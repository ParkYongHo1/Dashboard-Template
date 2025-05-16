import {
  DashboardInfoPageProps,
  DashboardInfoFormValues,
} from "@entities/dashboard/dashboard-info/model";
import { useDashboardForm } from "@features/dashboard/dashboard-info/model/hooks/useDashboardForm";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner";
import { Title } from "@shared/ui/Title";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import DashboardInfoTable from "@widgets/dashboard/dashboard-info/ui/DashboardInfoTable";
import DashboardInfoTitle from "@widgets/dashboard/dashboard-info/ui/DashboardInfoTitle";

const DashboardInfoComponent = ({ mode }: DashboardInfoPageProps) => {
  const { id } = useParams();
  const dashboardId = id ? id : undefined;

  // isEdit 상태 불러오기 수정페이지면 dashboardData에 API에 response값 담김
  const { isEdit, dashboardData, isLoading } = useDashboardForm(
    mode,
    dashboardId
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DashboardInfoFormValues>({
    defaultValues: {
      dashboardName: dashboardData?.dashboardInfo?.dashboardName || "",
      dbName: dashboardData?.dashboardInfo?.dbName || "",
      description: dashboardData?.dashboardInfo?.description || "",
    },
  });

  const onSubmit = (data: DashboardInfoFormValues) => {
    console.log("submit", data);
  };

  if (isLoading)
    return (
      <LoadingSpinner
        overlay={true}
        size="lg"
        color="blue"
        text="대시보드 정보를 불러오는 중입니다..."
      />
    );

  return (
    <div className="min-h-[85vh] max-w-[100vw]">
      <Title name={isEdit ? "DASHBOARD 수정" : "DASHBOARD 생성"} />
      <div className="p-6 text-lg">
        <DashboardInfoTitle isEdit={isEdit} />

        <DashboardInfoTable
          isEdit={isEdit}
          dashboardData={dashboardData}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default DashboardInfoComponent;
