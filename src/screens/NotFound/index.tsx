import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen  flex items-center justify-center">
      <div className=""> Bros why, Oya go back</div>
      <div
        className="underline cursor-pointer text-blue-400"
        onClick={() => navigate(-1)}
      >
        Go back
      </div>
    </div>
  );
};

export default NotFound;
