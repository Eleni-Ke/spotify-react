import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import { Container } from "react-bootstrap";
import Player from "./Components/Player";

function App() {
  return (
    <div className="App">
      <Container fluid className="main-container">
        <SideBar />
        <Main />
      </Container>
      <Player />
    </div>
  );
}

export default App;
