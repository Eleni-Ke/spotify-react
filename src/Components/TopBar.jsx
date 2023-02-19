import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="icons">
        <IoIosArrowDropleftCircle className="icon" />
        <IoIosArrowDroprightCircle className="icon" />
      </div>
      <div>Account Info</div>
    </div>
  );
};

export default TopBar;
