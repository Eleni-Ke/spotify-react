import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { BsSuitHeart, BsPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToPlaylistAction,
  removeFromPlaylistAction,
} from "../redux/actions";

const GoodMorningCard = (props) => {
  const [welcomeSong, setWelcomeSong] = useState([]);

  const dispatch = useDispatch();
  const favouriteList = useSelector((state) => state.playlist.content);

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
          <Card.Text>
            <Button>
              <BsPlayFill className="card-icon" />
            </Button>
            <Button
              onClick={() => {
                favouriteList.includes(welcomeSong[0])
                  ? dispatch(removeFromPlaylistAction(welcomeSong[0]))
                  : dispatch(addToPlaylistAction(welcomeSong[0]));
              }}
            >
              <BsSuitHeart className="card-icon" />
            </Button>
          </Card.Text>
        </Card>
      )}
    </Col>
  );
};

export default GoodMorningCard;
