import Layout from "../../components/Layout/Layout";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import SalesLineChart from "../../components/Dashboard/Chart/SalesLineChart";
import SalesTable from "../../components/Dashboard/Tables/SalesTable";
import { Select } from "antd";
import { DatePicker } from "antd";
const Dashboard = () => {
  const { RangePicker } = DatePicker;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Layout>
      <div className="mt-6 mb-[100px]">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="font-bold text-black">Hi Zannu</div>
            <div className="font-light text-black text-[15px] ">
              Report for today's sales
            </div>
          </div>
          <div className="">
            <div className="ml-4">
              <RangePicker style={{ width: 300, height: 43 }} />
            </div>
          </div>
        </div>
        <div className="h-[auto] grid grid-cols-2 rounded-md bg-white mt-4">
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="p-8 border-r-[1px] border-b-[1px] border-[#eee]">
              <div className="w-[45px] flex items-center justify-center h-[45px] bg-[#f3f3f3] rounded-full">
                <AiOutlineUsergroupAdd size={21} />
              </div>
              <div className="">
                <div className="text-black text-[28px] font-bold mt-3">
                  3,353
                </div>
              </div>
              <div className="font-thin text-[14px] text-[#060c07]">
                Total employees
              </div>
            </div>
            <div className="p-8 border-b-[1px] border-[#eee]">
              <div className="w-[45px] h-[45px] flex items-center justify-center bg-lightgrey rounded-full">
                <GiReceiveMoney size={21} />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-black text-[28px] font-bold mt-3">
                  ₦100,762.03
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-thin text-[14px] text-[#060c07]">
                  Account Balance
                </div>
                <div className="text-[12px] p-[5px] w-[fit-content] font-light rounded-lg text-green bg-[#00802219]">
                  Money in
                </div>
              </div>
            </div>
            <div className="p-8 border-r-[1px]  border-b-[1px] border-[#eee]">
              <div className="w-[45px] h-[45px] flex items-center justify-center bg-lightgrey rounded-full">
                <BsCartCheck size={21} />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-black text-[28px] font-bold mt-3">862</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-thin text-[14px] text-[#060c07]">
                  Approved orders
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="w-[45px] h-[45px] flex items-center justify-center bg-lightgrey rounded-full">
                <BsCartX size={21} />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-black text-[28px] font-bold mt-3">42</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-thin text-[14px] text-[#060c07]">
                  Pending orders
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="font-semibold text-[15px] text-black ">
              Sales analytics for today
            </div>
            <div className="text-[#f0f0f0]">
              <SalesLineChart />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md mt-4">
          <div className="">
            <div className="text-black font-semibold">Current Sales</div>
            <div className="font-light text-black text-[15px]">
              Last 20 transactions
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="">
              <Select
                defaultValue="all"
                style={{ width: 120, height: 41 }}
                placeholder="Status"
                onChange={handleChange}
                options={[
                  { value: "all", label: "All" },
                  { value: "approved", label: "Approved" },
                  { value: "declined", label: "Declined" },
                  { value: "Pending", label: "Pending" },
                ]}
              />
            </div>
            <div className="ml-4">
              <Select
                defaultValue="All staff"
                style={{ width: 120, height: 41 }}
                placeholder="Status"
                onChange={handleChange}
                options={[
                  { value: "mike", label: "Mike" },
                  { value: "james", label: "James" },
                ]}
              />
            </div>
          </div>
          <div className="mt-6">
            <SalesTable />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
