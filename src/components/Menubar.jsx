import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";

const MenuBar = () => {
  return (
    <div className="bg-blue-600 py-3 px-5 flex justify-around rounded-full fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md md:py-4 md:px-10 md:justify-between">
      <Link to="/">
        <AiOutlineHome className="text-white w-6 h-6" />
      </Link>
      <Link to="/chat">
        <AiOutlineMessage className="text-white w-6 h-6" />
      </Link>
      <Link to="/">
        <AiOutlineUser className="text-white w-6 h-6" />
      </Link>
      <Link to="/calendar">
        <AiOutlineCalendar className="text-white w-6 h-6" />
      </Link>
    </div>
  );
};

export default MenuBar;
