import Chart from "@features/stats/Chart/ui/Chart";
import { Title } from "@shared/ui/Title";
import StatsHeader from "@widgets/stats/StatsHeader";
import { useState } from "react";

type ChartType = "donut" | "bar" | "line" | "area";

const sampleData = [
  { name: "그룹 A", value: 400 },
  { name: "그룹 B", value: 300 },
  { name: "그룹 C", value: 300 },
  { name: "그룹 D", value: 200 },
  { name: "그룹 E", value: 150 },
];

const salesData = [
  { name: "1월", value: 1200 },
  { name: "2월", value: 1900 },
  { name: "3월", value: 1500 },
  { name: "4월", value: 2400 },
  { name: "5월", value: 2800 },
  { name: "6월", value: 3100 },
];

const StatsItemPage = () => {
  const [dashboardRowChartType, setDashboardRowChartType] =
    useState<ChartType>("donut");
  const [dashboardColumnChartType, setDashboardColumnChartType] =
    useState<ChartType>("bar");

  const handleDashboardRowData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDashboardRowChartType(e.target.value as ChartType);
  };

  const handleDashboardColumnData = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDashboardColumnChartType(e.target.value as ChartType);
  };

  return (
    <div className="min-h-[85vh] bg-gray-50">
      <Title name="통계 차트" />
      <div className="p-6 ">
        <StatsHeader />

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                그룹항목 통계
              </h3>
              <div>
                <select
                  value={dashboardRowChartType}
                  onChange={handleDashboardRowData}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="donut">도넛 차트</option>
                  <option value="bar">막대 차트</option>
                  <option value="line">라인 차트</option>
                  <option value="area">영역 차트</option>
                </select>
              </div>
            </div>
            <Chart chartType={dashboardRowChartType} data={sampleData} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                집계 항목 통계
              </h3>
              <div>
                <select
                  value={dashboardColumnChartType}
                  onChange={handleDashboardColumnData}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="bar">막대 차트</option>
                  <option value="line">라인 차트</option>
                  <option value="area">영역 차트</option>
                  <option value="donut">도넛 차트</option>
                </select>
              </div>
            </div>
            <Chart chartType={dashboardColumnChartType} data={salesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsItemPage;
