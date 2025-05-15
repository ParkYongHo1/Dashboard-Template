import { ChartActiveShapeProps } from "@entities/stats/model";
import { JSX } from "react";
import { Sector } from "recharts";

export const renderActiveShape = (props: unknown): JSX.Element => {
  const shape = props as ChartActiveShapeProps;
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = shape;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-20}
        textAnchor="middle"
        fill="#333"
        className="text-base font-bold"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={10}
        textAnchor="middle"
        fill="#333"
        className="text-xl"
      >
        {`${value}`}
      </text>
      <text
        x={cx}
        y={cy}
        dy={30}
        textAnchor="middle"
        fill="#999"
        className="text-sm"
      >
        {`(${(percent * 100).toFixed(1)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};
