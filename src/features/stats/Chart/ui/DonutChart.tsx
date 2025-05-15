import { ChartDataItem } from "@entities/stats/model";
import { COLORS, sampleData } from "@shared/model/data";
import { JSX, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { renderActiveShape } from "../lib/renderActiveShape";
import { CustomTooltip } from "./CustomTooltip";

const DonutChartComponent = ({
  data = sampleData,
}: {
  data?: ChartDataItem[];
}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPieEnter = (_: unknown, index: number): void => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={140}
          paddingAngle={5}
          dataKey="value"
          onMouseEnter={onPieEnter}
          animationBegin={0}
          animationDuration={1200}
          animationEasing="ease-out"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#fff"
              strokeWidth={2}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          iconSize={10}
          layout="horizontal"
          wrapperStyle={{
            paddingTop: "20px",
            fontSize: "14px",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChartComponent;
