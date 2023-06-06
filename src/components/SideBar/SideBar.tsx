import { Link, useLocation } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";

const SideBar = () => {
  const location = useLocation();
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
            className={`${
              location.pathname.includes("/dashboard") ? "bg-green" : ""
            } flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md`}
          >
            <div className="flex items-center justify-center ">
              <BsGrid
                color={`${
                  location.pathname.includes("/dashboard") ? "white" : "#aaa"
                }`}
                size={18}
              />
            </div>
            <div
              className={`${
                location.pathname.includes("/dashboard")
                  ? "text-white"
                  : "text-black"
              } font-light px-2 text-[15px]`}
            >
              Dashboard
            </div>
          </Link>
          <Link
            to={"/account"}
            className={`${
              location.pathname.includes("/account") ? "bg-green" : ""
            } flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md`}
          >
            <div className="flex items-center justify-center ">
              <GiReceiveMoney
                color={`${
                  location.pathname.includes("/account") ? "white" : "#aaa"
                }`}
                size={18}
              />
            </div>
            <div
              className={`${
                location.pathname.includes("/account")
                  ? "text-white"
                  : "text-black"
              } font-light px-2 text-[15px]`}
            >
              Account
            </div>
          </Link>
          <Link
            to={"/carts"}
            className={`${
              location.pathname.includes("/carts") ? "bg-green" : ""
            } flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md`}
          >
            <div className="flex items-center justify-center ">
              <FaOpencart
                color={`${
                  location.pathname.includes("/carts") ? "white" : "#aaa"
                }`}
                size={18}
              />
            </div>
            <div
              className={`${
                location.pathname.includes("/carts")
                  ? "text-white"
                  : "text-black"
              } font-light px-2 text-[15px]`}
            >
              Carts
            </div>
          </Link>
          <Link
            to={"/employee"}
            className={`${
              location.pathname.includes("/employee") ? "bg-green" : ""
            } flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md`}
          >
            <div className="flex items-center justify-center ">
              <AiOutlineUsergroupAdd
                color={`${
                  location.pathname.includes("/employee") ? "white" : "#aaa"
                }`}
                size={18}
              />
            </div>
            <div
              className={`${
                location.pathname.includes("/employee")
                  ? "text-white"
                  : "text-black"
              } font-light px-2 text-[15px]`}
            >
              Employee
            </div>
          </Link>
          <Link
            to={"/settings"}
            className={`${
              location.pathname.includes("/settings") ? "bg-green" : ""
            } flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md`}
          >
            <div className="flex items-center justify-center ">
              <SlSettings
                color={`${
                  location.pathname.includes("/settings") ? "white" : "#aaa"
                }`}
                size={18}
              />
            </div>
            <div
              className={`${
                location.pathname.includes("/settings")
                  ? "text-white"
                  : "text-black"
              } font-light px-2 text-[15px]`}
            >
              Settings
            </div>
          </Link>
          <div
            className={`flex my-6 px-2 items-center rounded-md h-[43px] drop-shadow-md`}
          >
            <div className="flex items-center justify-center ">
              <CiLogout color={`#aaa`} size={18} />
            </div>
            <div className={`text-black font-light px-2 text-[15px]`}>
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 w-full px-2 bottom-2 ">
        <Link
          to={"/dashboard"}
          className="flex my-6 w-full items-center rounded-md h-[43px] drop-shadow-md first-letter:"
        >
          <div className="flex items-center justify-center ">
            <BiSupport
              color={`${
                location.pathname.includes("/dashboard") ? "white" : "#aaa"
              }`}
              size={18}
            />
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
