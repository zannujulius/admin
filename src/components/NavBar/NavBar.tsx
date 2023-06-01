import { CiMail } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="bg-white px-6 flex items-center justify-between sticky top-0 left-0 z-40 h-[65px] drop-shadow-sm">
      <input
        type="search"
        placeholder="Search"
        className="px-3 bg-[#f2f2f2] placeholder:font-light rounded-lg w-[300px] h-[42px] placeholder:text-[14px] "
      />
      <div className="flex items-center">
        <div className="">
          <CiMail size={23} />
        </div>
        <div
          className="w-[33px] ml-4  h-[33px] rounded-full border-[1xp] border-[#eee]"
          style={{
            background: `url(https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
