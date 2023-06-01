import moment from "moment";
import { Link } from "react-router-dom";

const SalesTable = () => {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="bg-[#f8f8f8]">
          <tr>
            <th className="font-semibold text-[15px] p-3">Attendant</th>
            <th className="font-semibold text-[15px] p-3">Invoice ID</th>
            <th className="font-semibold text-[15px] p-3">Amount</th>
            <th className="font-semibold text-[15px] p-3">Status</th>
            <th className="font-semibold text-[15px] p-3">Date</th>
            <th className="font-semibold text-[15px] p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(12)).map((_, i) => (
            <tr
              key={i}
              className="border-b-[1px] last:border-b-0 border-[#eee]"
            >
              <td className="p-2">
                <div className="text-center font-light text-[14px] p-2 ">
                  Micheal
                </div>
              </td>
              <td className="p-2">
                <div className="text-center font-light text-[14px] p-2 ">
                  23C593
                </div>
              </td>
              <td className="p-2">
                <div className="text-center font-light text-[14px] p-2 ">
                  NGN 3,750.00
                </div>
              </td>
              <td className="p-2">
                <div className="text-center text-green font-light text-[14px] p-2 ">
                  Approved
                </div>
              </td>
              <td className="p-2">
                <div className="text-center font-light text-[14px] p-2 ">
                  {moment(Date.now()).format("lll")}
                </div>
              </td>
              <td className="p-2 flex items-center justify-center">
                <Link
                  to="/"
                  className="text-center mt-1 text-blue-600 underline rounded-md font-light text-[14px] p-1"
                >
                  View detials
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
