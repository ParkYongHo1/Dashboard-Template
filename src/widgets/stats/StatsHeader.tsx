import help from "@assets/home/help.svg";

const StatsHeader = () => {
  return (
    <>
      <div className="p-6 my-[10px] bg-white flex flex-col gap-[10px]">
        <div className="flex gap-[10px] items-center">
          <img src={help} />
          <p className="text-sm text-gray-500">
            날짜 선택 시 해당 날짜의 데이터가 조회됩니다.
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <img src={help} />
          <p className="text-sm text-gray-500">
            PDF 버튼 클릭 시 해당 화면이 PDF파일로 다운로드 됩니다.
          </p>
        </div>
      </div>
    </>
  );
};
export default StatsHeader;
