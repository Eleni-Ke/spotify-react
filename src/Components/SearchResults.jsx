import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongsActionAsync } from "../redux/actions";
import TopBar from "./TopBar";

const SearchResults = () => {
  const songList = useSelector((state) => state.song.stock);
  const [searchInput, setSearchInput] = useState({ word: "" });

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
            // setSearchInput({
            //   ...searchInput,
            //   word: e.target.value,
            // });
            dispatch(getSongsActionAsync(e.target.value));
          }}
        />
      </InputGroup>
      {songList.length === 0 ? (
        <p>Please search a song</p>
      ) : (
        <p>The List of songs will be here.</p>
      )}
    </div>
  );
};

export default SearchResults;
