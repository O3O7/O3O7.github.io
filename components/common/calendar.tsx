type Props = {};

const Calendar = (props: Props) => {
  const now = new Date();
  return (
    <div className="w-14 md:w-20 pt-3 flex-none rounded-t text-center shadow-lg">
      <div className="bg-blue-500 text-sm text-white py-1 rounded-t">{now.getMonth() + 1}月</div>
      <div className="pt-1 border-l border-r border-white bg-white">
        <span className="text-2xl font-bold leading-tight">{now.getDate()}</span>
      </div>
      <div className="px-3 border-l border-r  border-b rounded-b border-white bg-white">
        <hr />
        <hr className="mt-2" />
        <hr className="mt-2 mb-2" />
      </div>
    </div>
  );
};

export default Calendar;
