import { DatePicker } from "antd";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Layout from "../../components/Layout/Layout";
import { BiCartDownload } from "react-icons/bi";
import LineChart from "../../components/Layout/LineChart";
import TopCards from "../../components/Dashboard/Cards/TopCards";
import { Select } from "antd";
import SalesTable from "../../components/Dashboard/Tables/SalesTable";

const Cart = () => {
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
              Cart summary
            </div>
          </div>
          <div className="">
            <div className="ml-4">
              <RangePicker style={{ width: 300, height: 43 }} />
            </div>
          </div>
        </div>
        <div className="grid mt-6 grid-cols-4 gap-6">
          <div className="h-[130px] bg-black relative p-2 rounded-md drop-shadow-sm "></div>
          <TopCards type="approved" value="6,523" />
          <TopCards type="pending" value="32" />
          <TopCards type="cancelled" value="12" />
        </div>
        <div className="bg-white p-4 rounded-md mt-4">
          <div className="">
            <div className="text-black font-semibold">Current Sales</div>
            <div className="font-light text-black text-[15px]">
              Last 20 transactions
            </div>
          </div>
          <hr className="my-4" />
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
          <div className="mt-6 hidden md:flex">
            <SalesTable />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
