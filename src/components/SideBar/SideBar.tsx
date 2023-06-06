import { Link } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="hidden relative lg:w-[280px] lg:flex bg-white h-screen border-r-[1px] px-4 border-[#eee]">
      <div className="">
        <div className="flex items-center mt-6">
          <div className="w-[30px] h-[30px] border-[1px] border-[#eee] rounded-full mr-4"></div>
          <div className="text-black font-bold text-[18px]">
            Fast track - Admin
          </div>
        </div>
        {/* links */}
        <div className="mt-6">
          <Link
            to={"/dashboard"}
            className="flex my-6 px-2 bg-secondary items-center rounded-md h-[43px] drop-shadow-md first-letter:"
          >
            <div className="flex items-center justify-center ">
              <BsGrid color="white" size={18} />
            </div>
            <div className="font-light px-2 text-[15px] text-white">
              Dashboard
            </div>
          </Link>
          <Link
            to={"/account"}
            className="flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md first-letter:"
          >
            <div className="flex items-center justify-center ">
              <GiReceiveMoney color="#aaa" size={18} />
            </div>
            <div className="font-light px-2 text-black text-[15px]">
              Account
            </div>
          </Link>
          <Link
            to={"/carts"}
            className="flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md first-letter:"
          >
            <div className="flex items-center justify-center ">
              <FaOpencart color="#aaa" size={18} />
            </div>
            <div className="font-light px-2 text-black text-[15px]">Carts</div>
          </Link>
          <Link
            to={"/"}
            className="flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md first-letter:"
          >
            <div className="flex items-center justify-center ">
              <AiOutlineUsergroupAdd color="#aaa" size={18} />
            </div>
            <div className="font-light px-2 text-black text-[15px]">
              Employee
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md first-letter:"
          >
            <div className="flex items-center justify-center ">
              <SlSettings color="#aaa" size={18} />
            </div>
            <div className="font-light px-2 text-black text-[15px]">
              Settings
            </div>
          </Link>
          <Link
            to={"/"}
            className="flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md first-letter:"
          >
            <div className="flex items-center justify-center ">
              <CiLogout color="#aaa" size={18} />
            </div>
            <div className="font-light px-2 text-black text-[15px]">Logout</div>
          </Link>
        </div>
      </div>
      <div className="absolute left-0 w-full px-2 bottom-2 ">
        <Link
          to={"/dashboard"}
          className="flex my-6 w-full items-center rounded-md h-[43px] drop-shadow-md first-letter:"
        >
          <div className="flex items-center justify-center ">
            <BiSupport color="#aaa" size={18} />
          </div>
          <div className="font-light px-4 text-[15px] text-black ">
            Get Help
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
