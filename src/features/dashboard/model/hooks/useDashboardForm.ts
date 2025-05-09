import { dashboardApi } from "@entities/dashboard/apis";
import { useQuery } from "@tanstack/react-query";

const DEV_MODE = process.env.NODE_ENV === "development";
const DEV_DELAY = 1000;

export const useDashboardForm = (
  mode: "add" | "edit",
  dashboardId?: number
) => {
  const isEdit = mode === "edit";

  const {
    data: dashboardData,
    isLoading: queryLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboard", dashboardId],
    queryFn: async () => {
      if (!dashboardId && isEdit) {
        throw new Error("dashboardId가 없습니다.");
      }

      if (DEV_MODE && DEV_DELAY >= 0) {
        await new Promise((resolve) => setTimeout(resolve, DEV_DELAY));
      }

      return dashboardId ? dashboardApi.getDashboardData(dashboardId) : null;
    },
    enabled: isEdit && !!dashboardId,
  });

  const isLoading = queryLoading;

  return {
    isEdit,
    dashboardData,
    isLoading,
    isError,
  };
};
