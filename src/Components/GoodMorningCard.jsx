import { Card, Col } from "react-bootstrap";

const GoodMorningCard = () => {
  return (
    <Col>
      <Card className="good-morning-card">
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Title>Playlist Title</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GoodMorningCard;
