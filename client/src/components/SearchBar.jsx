import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllCountries } from "../../src/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(getAllCountries(e.target.value));
  };
  return (
    <Search
      type="text"
      placeholder="Search Country..."
      onChange={handleOnChange}
    />
  );
}

const Search = styled.input`
  width: 300px;
  height: 2rem;
`;
