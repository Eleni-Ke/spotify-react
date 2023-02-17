import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import SearchBar from "./SearchBar";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="icons">
        <IoIosArrowDropleftCircle className="icon" />
        <IoIosArrowDroprightCircle className="icon" />
      </div>
      <SearchBar />
      <div>Account Info</div>
    </div>
  );
};

export default TopBar;
