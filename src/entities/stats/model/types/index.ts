import { TooltipProps } from "recharts";

export interface ChartDataItem {
  name: string;
  value: number;
}

export interface ChartActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: ChartDataItem;
  percent: number;
  value: number;
  midAngle?: number;
  cornerRadius?: number;
  index?: number;
  [key: string]: unknown;
}

export type ChartCustomTooltipProps = TooltipProps<number, string> & {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    percent: number;
  }>;
};
export type ChartType = "donut" | "bar" | "line" | "area";

export interface ChartProps {
  title?: string;
  data?: ChartDataItem[];
  chartType?: ChartType;
  width?: string | number;
  height?: number;
}
