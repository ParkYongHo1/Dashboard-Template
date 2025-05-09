import axios from "axios";
import { DashboardInfo } from "../model";

export const dashboardApi = {
  async getDashboardData(id: number): Promise<DashboardInfo> {
    console.log(id);

    const response = await axios.get(`/apis/getDashboardData?id=${id}`);
    console.log(response.data);
    return response.data;
  },
};
