import { Button, Form, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon2"
        />
        <Button>Search</Button>
      </InputGroup>
    </>
  );
};

export default SearchBar;
