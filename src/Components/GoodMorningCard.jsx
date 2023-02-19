import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

const GoodMorningCard = (props) => {
  const [welcomeSong, setWelcomeSong] = useState([]);

  const getWelcomeSong = async () => {
    try {
      console.log(props.artist);
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          props.artist
      );
      if (res.ok) {
        let firstSong = await res.json();
        firstSong = firstSong.data[0];
        console.log(firstSong);
        setWelcomeSong([firstSong]);
      } else {
        console.log("Error fetching.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWelcomeSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col>
      {welcomeSong.length > 0 && (
        <Card className="good-morning-card">
          <Card.Img variant="top" src={welcomeSong[0].album.cover} />
          <Card.Body>
            <Card.Title>{welcomeSong[0].title}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </Col>
  );
};

export default GoodMorningCard;
