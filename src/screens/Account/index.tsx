import { DatePicker } from "antd";
import Layout from "../../components/Layout/Layout";
const Account = () => {
  const { RangePicker } = DatePicker;
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
      </div>
    </Layout>
  );
};

export default Account;
