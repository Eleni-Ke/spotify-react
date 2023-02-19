import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsPlayFill } from "react-icons/bs";
import { removeFromPlaylistAction } from "../redux/actions";

const Favourite = () => {
  const favouriteList = useSelector((state) => state.playlist.content);

  const dispatch = useDispatch();
  return (
    <>
      <h2>Your favourites:</h2>
      <div className="favourite-container">
        {favouriteList.length === 0 ? (
          <p>You don't have songs in your favourite list yet.</p>
        ) : (
          favouriteList.map((song, i) => (
            <Card key={i}>
              <Card.Img variant="top" src={song.album.cover} />
              <Card.Body>
                <Card.Title>
                  {song.title} by {song.artist.name}
                </Card.Title>
                <Card.Text>
                  <BsPlayFill className="card-icon" />
                  <Button
                    onClick={() => {
                      dispatch(removeFromPlaylistAction(song));
                    }}
                  >
                    Remove
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
export default Favourite;
