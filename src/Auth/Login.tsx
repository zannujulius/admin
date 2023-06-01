import { CiMail } from "react-icons/ci";
import Button from "../components/Button";
import { MdPassword } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState } from "react";
const Login = () => {
  const [eye, seteye] = useState<Boolean>(false);
  const navigate = useNavigate();
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-[#f3f3f3]">
      <div className="w-[400px] p-4 rounded-lg bg-white drop-shadow-lg">
        <div className="">
          <div className=" items-center justify-center mb-3">
            <div className="h-[30px] w-[30px] border-[0.5px] border-[#eee] rounded-full"></div>
          </div>
          <div className=""></div>
          <div className="text-[black] font-bold text-center text-[18px] ">
            Fast Track - Admin
          </div>
        </div>
        <div className="font-thin mt-2 text-primary text-center">
          Please Login to continue
        </div>
        <hr className="my-4" />
        <div className="mt-2 mb-4">
          <div className="">
            <label className="text-[14px]">Email</label>
            <div className="flex mt-1 h-[45px] overflow-hidden items-center border-[1px] px-2 border-[#d3d3d3] rounded-md">
              <div className="">
                <CiMail size={21} color={"#111827"} />
              </div>
              <input
                type="email"
                required
                className="placeholder:text-[13px] w-full px-3 text-primary text-[15px] outline-none border-none h-full placeholder:font-light"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          {/* Password */}
          <div className="mt-6">
            <label className="text-[14px]">Password</label>
            <div className="flex mt-1 h-[45px] items-center border-[1px] px-2 border-[#d3d3d3] rounded-md">
              <div className="">
                <MdPassword size={21} color={"#111827"} />
              </div>
              <input
                type={eye ? "password" : "eye"}
                className="placeholder:text-[13px] overflow-hidden px-3 text-[15px] text-primary outline-none border-none h-full w-full placeholder:text-thin"
                placeholder="Enter your password"
              />
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => seteye(!eye)}
              >
                {eye ? <BsEye /> : <BsEyeSlash />}
              </div>
            </div>
          </div>
          <div className="text-end text-[14px] mt-2 underline">
            <Link
              className="italic text-[#2f2f2f] font-light"
              to={"forgotpassword"}
            >
              Forgot password
            </Link>
          </div>
          {/* Button */}
          <Button
            text={"Login"}
            onclick={() => {
              navigate("/dashboard");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
