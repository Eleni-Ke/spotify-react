import { Row } from "react-bootstrap";
import GoodMorningCard from "./GoodMorningCard";

const GoodMorning = () => {
  return (
    <div className="good-morning-container">
      <h2>Good morning</h2>
      <Row className="good-morning-row">
        <GoodMorningCard />
        <GoodMorningCard />
        <GoodMorningCard />
        <GoodMorningCard />
        <GoodMorningCard />
        <GoodMorningCard />
      </Row>
    </div>
  );
};

export default GoodMorning;
