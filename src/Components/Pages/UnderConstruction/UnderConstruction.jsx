import { Link } from "react-router-dom";
import icon from "../../../assets/icons/wired-outline-409-tool-hover-oscillate.gif";

const UnderConstruction = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center">
        <div className="content-div text-center">
      <div className="flex justify-center ">
        <img src={icon} alt="" />
      </div>
      <h1
        style={{ fontFamily: "Taviraj, serif" }}
        className=" text-3xl mt-10"
      >
        The page is under Construction{" "}
      </h1>
      <div className="flex justify-center mt-5">
        <Link to="/">
          <button className="bg-[#25476a] text-white font-semibold rounded-md px-8 py-2 uppercase shadow-md  hover:shadow-lg hover:shadow-gray-500">
            Back To Home
          </button>
        </Link>
      </div>
        </div>
    </div>
  );
};

export default UnderConstruction;
