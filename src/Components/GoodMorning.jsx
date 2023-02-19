import { Row } from "react-bootstrap";
import GoodMorningCard from "./GoodMorningCard";

let welcomeArtists = [
  "Arianna Grande",
  "Lady Gaga",
  "Miley Cyrus",
  "Sam Smith",
  "Shakira",
  "SOJA",
];

const GoodMorning = () => {
  return (
    <div className="good-morning-container">
      <h2>Good morning</h2>
      <Row className="good-morning-row">
        {welcomeArtists.map((artistName) => (
          <GoodMorningCard artist={artistName} key={artistName} />
        ))}
      </Row>
    </div>
  );
};

export default GoodMorning;
