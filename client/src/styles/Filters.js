import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 40px;

  select {
    display: inline-block;
    width: 200px;
    cursor: pointer;
    padding: 7px 10px;
    outline: none;
    border: none;
    background: #f0f0f0;
    font-size: 1em;
    color: var(--background-color);
    font-family: "Quicksand", sans-serif;
    border: 2px solid rgba(18, 117, 109, 0.2);
    border-radius: 0.75rem;
    position: relative;
  }
`;
