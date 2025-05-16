import axios from "axios";
import { DashboardEditInfo } from "../model";

// 생성 - api/setting/dashboards
const dummyDashboardData: DashboardEditInfo = {
  dashboardId: "test123",
  dashboardInfo: {
    dashboardName: "샘플 대시보드",
    dbName: "sample_db",
    description: "테스트용 대시보드입니다.",
  },

  dashboardDetail: {
    dashboardRow: {
      colName: "tokens",
      colValue: "토큰수",
    },
    dashboardColumn: {
      id: 1,
      colName: "intent",
      alias: "의도",
      condition: "같다",
      value: "인사맣",
      aggregation: "개수",
    },
  },
};
export const dashboardApi = {
  async getDashboardData(id: string): Promise<DashboardEditInfo> {
    if (process.env.NODE_ENV === "development") {
      console.log("개발 환경에서 더미 데이터 사용");
      return dummyDashboardData;
    }

    const response = await axios.get<DashboardEditInfo>(
      `/api/setting/dashboard?id=${id}`
    );
    return response.data;
  },
};
