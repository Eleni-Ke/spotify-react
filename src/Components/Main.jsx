import Favourite from "./Favourite";
import ForYou from "./ForYou";
import GoodMorning from "./GoodMorning";
import TopBar from "./TopBar";

const Main = () => {
  return (
    <div className="main">
      <TopBar />
      <GoodMorning />
      <Favourite />
    </div>
  );
};

export default Main;
