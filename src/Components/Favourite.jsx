import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsPlayFill, BsSuitHeart } from "react-icons/bs";

const Favourite = () => {
  const favouriteList = useSelector((state) => state.playlist.content);
  return (
    <>
      <h2>Your favourites:</h2>
      <div className="favourite-container">
        {favouriteList.length === 0 ? (
          <p>You don't have songs in your favourite list yet.</p>
        ) : (
          favouriteList.data.map((song) => (
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
    </>
  );
};
export default Favourite;
