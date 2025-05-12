import { DashboardToolTipActionProps } from "@entities/dashboard/model";
import DashboardToolTip from "@widgets/dashboard/ui/DashboardToolTip";

const DashboardToolTipAction = ({
  toolTipVisible,
  setToolTipVisible,
}: DashboardToolTipActionProps) => {
  const handleMouseEnter = () => {
    setToolTipVisible(true);
  };
  const handleMouseLeave = () => {
    setToolTipVisible(false);
  };
  return (
    <>
      <div
        className="flex items-center justify-center border-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <DashboardToolTip toolTipVisible={toolTipVisible} />
      </div>
    </>
  );
};
export default DashboardToolTipAction;
