import axios from "axios";
import { DashboardInfo } from "../model";

export const dashboardApi = {
  async getDashboardData(id: number): Promise<DashboardInfo> {
    const response = await axios.get(`/apis/getDashboardData?id=${id}`);
    return response.data;
  },
};
