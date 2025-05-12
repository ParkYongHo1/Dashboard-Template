import {
  DashboardFormProps,
  DashboardFormValues,
} from "@entities/dashboard/model";
import { useDashboardForm } from "@features/dashboard/model/hooks/useDashboardForm";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner";
import { Title } from "@shared/ui/Title";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import DashboardInfoTable from "@widgets/dashboard/ui/DashboardInfoTable";
import DashboardInfoTitle from "@widgets/dashboard/ui/DashboardInfoTitle";
import DashboardFormFields from "./DashboardFormFields";
import { Button } from "@shared/ui/Button";

const DashboardForm = ({ mode }: DashboardFormProps) => {
  const { id } = useParams();
  const dashboardId = id ? Number(id) : undefined;

  const { isEdit, dashboardData, isLoading } = useDashboardForm(
    mode,
    dashboardId
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DashboardFormValues>({
    defaultValues: {
      title: "",
      dashboardId: "",
      description: "",
    },
  });

  const onSubmit = (data: DashboardFormValues) => {
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

        {isEdit && dashboardData ? (
          <DashboardInfoTable dashboardData={dashboardData} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <DashboardFormFields register={register} errors={errors} />
            <div className="flex justify-center mt-[50px]">
              <Button
                name="저장"
                type="submit"
                variant="default"
                className="px-10"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DashboardForm;
