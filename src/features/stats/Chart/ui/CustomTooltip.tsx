import { ChartCustomTooltipProps } from "@entities/stats/model";
import { JSX } from "react";
// 커스텀 툴팁
export const CustomTooltip = ({
  active,
  payload,
}: ChartCustomTooltipProps): JSX.Element | null => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-gray-800">{`${payload[0].name}`}</p>
      </div>
    );
  }
  return null;
};
