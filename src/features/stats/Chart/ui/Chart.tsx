import { ChartProps } from "@entities/stats/model";
import { sampleData } from "@shared/model/data";
import { JSX } from "react";
import DonutChartComponent from "./DonutChart";
import { BarChartComponent } from "./BarChart";
import { LineChartComponent } from "./LineChart";
import { AreaChartComponent } from "./AreaChart";

const Chart = ({
  title = "데이터 차트",
  data = sampleData,
  chartType = "donut",
  height = 400,
}: ChartProps): JSX.Element => {
  const renderChart = (): JSX.Element => {
    switch (chartType) {
      case "donut":
        return <DonutChartComponent data={data} />;
      case "bar":
        return <BarChartComponent data={data} />;
      case "line":
        return <LineChartComponent data={data} />;
      case "area":
        return <AreaChartComponent data={data} />;
      default:
        return <DonutChartComponent data={data} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <div style={{ height: `${height}px` }}>{renderChart()}</div>
    </div>
  );
};

export default Chart;
