import { BiCartDownload } from "react-icons/bi";
import LineChart from "../../Layout/LineChart";

interface Props {
  type: string;
  value: string;
}
const TopCards = ({ type, value }: Props) => {
  const IconType = () =>
    type == "approved" ? (
      <BiCartDownload size={22} color="green" />
    ) : type == "pending" ? (
      <BiCartDownload size={22} color="orange" />
    ) : (
      <BiCartDownload size={22} color="red" />
    );

  const bgColor =
    type == "approved" ? "#dbffe5" : type == "pending" ? "#ffeece" : "#ffbfbf";
  return (
    <div className="h-[130px] relative p-2 rounded-md drop-shadow-sm bg-white">
      <div className="flex items-start justify-between">
        <div className="">
          <div className="text-black text-[28px] font-bold">{value}</div>
          <div className="font-thin text-[14px] text-[#060c07] ">
            {type[0].toUpperCase() + type.substring(1)} carts
          </div>
        </div>
        <div
          className={`w-[45px] flex items-center justify-center h-[45px] rounded-full bg-[${bgColor}]`}
        >
          {/* dcffe5 */}
          <IconType />
        </div>
      </div>
      <div className="absolute right-1 bottom-1">
        <div className="h-[65px] w-[170px]">
          <LineChart type={type} />
        </div>
      </div>
    </div>
  );
};

export default TopCards;
