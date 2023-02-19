import { Card, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongsActionAsync } from "../redux/actions";
import TopBar from "./TopBar";
import { BsSuitHeart, BsPlayFill } from "react-icons/bs";

const SearchResults = () => {
  const songList = useSelector((state) => state.song.stock);
  console.log("this is the array in searchResults", songList);

  const dispatch = useDispatch();

  return (
    <div className="main">
      <TopBar />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            dispatch(getSongsActionAsync(e.target.value));
          }}
        />
      </InputGroup>
      <div className="search-result-container">
        {songList.length === 0 ? (
          <p>Please search a song</p>
        ) : (
          songList.data.map((song) => (
            <Card key={song.id}>
              <Card.Img variant="top" src={song.album.cover} />
              <Card.Body>
                <Card.Title>
                  {song.title} by {song.artist.name}
                </Card.Title>
                <Card.Text>
                  <BsPlayFill className="card-icon" />
                  <BsSuitHeart className="card-icon" />
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
