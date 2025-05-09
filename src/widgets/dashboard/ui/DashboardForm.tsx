import { DashboardFormProps } from "@entities/dashboard/model";
import { useDashboardForm } from "@features/dashboard/model/hooks/useDashboardForm";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner";
import { Title } from "@shared/ui/Title";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DashboardForm = ({ mode }: DashboardFormProps) => {
  const { id } = useParams();
  const dashboardId = id ? Number(id) : undefined;
  const navigate = useNavigate();

  const { isEdit, dashboardData, isLoading, isError } = useDashboardForm(
    mode,
    dashboardId
  );
  useEffect(() => {
    if (isEdit) {
      if (!dashboardId) {
        alert("잘못된 접근입니다.");
        navigate("/");
        return;
      }
      if (isLoading) {
        return;
      }
      if (isError) {
        alert("잘못된 접근입니다.");
        navigate("/");
      }
    }
  }, [isEdit, dashboardId, isLoading, isError, navigate]);

  if (isLoading)
    return (
      <LoadingSpinner
        overlay={true}
        size="lg"
        color="blue"
        text="대시보드 정보를 불러오는 중입니다..."
      />
    );
  if (isError)
    return (
      <div className="p-4 text-center text-red-500">
        Error loading dashboard.
      </div>
    );

  return (
    <div className="min-h-[85vh] max-w-[100vw]">
      <Title name={isEdit ? "DASHBOARD 수정" : "DASHBOARD 생성"} />
      <div className="p-6 text-lg">
        <div className="flex items-center gap-[10px]">
          <p>
            기본정보 {dashboardData && <span> ID: {dashboardData.id}</span>}
          </p>
          <p className="text-red-500 text-xs">
            {isEdit
              ? "* 입력한 대시보드에 대한 정보입니다."
              : "* DASHBOARD 기본정보를 입력해주세요."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardForm;
