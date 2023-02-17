import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import { Container } from "react-bootstrap";
import Player from "./Components/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid className="main-container">
          <SideBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/searchResults" element={<SearchResults />} />
          </Routes>
        </Container>
        <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;
