import axios from "axios";
import { DashboardInfo } from "../model";

export const dashboardApi = {
  async getDashboardData(id: number): Promise<DashboardInfo> {
    const response = await axios.get(`/apis/getDashboardData?id=${id}`);
    // 넘겨져오는 데이터 title, dashboardId, description
    return response.data;
  },
};
