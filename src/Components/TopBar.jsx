import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="icon">
        <IoIosArrowDropleftCircle />
        <IoIosArrowDroprightCircle />
      </div>
      <div>Searchbar</div>
      <div>Account Info</div>
    </div>
  );
};

export default TopBar;
