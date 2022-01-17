import styled from "styled-components";
import { Button } from "../styles/Button";

export const FormContainer = styled.form`
  color: var(--text-color);
  h1 {
    color: var(--text-color);
  }
`;

export const BtnForm = styled(Button)`
  margin: 0 0.5rem;
`;

export const Country = styled.div`
  margin: 1rem;
  background: rgba(255, 255, 255, 0.12);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3); */
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 1.5rem;
    cursor: pointer;
  }
`;

export const InputLabel = styled.div`
  font-size: 1.2rem;
  p {
    margin: 1.5rem 0;
    font-weight: bold;
  }
  input {
    margin: 0.5rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  div {
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 7px 10px;
  outline: none;
  border: none;
  background: #f0f0f0;
  font-size: 1em;
  color: var(--background-color);
  font-family: "Quicksand", sans-serif;
  border-radius: 0.75rem;
  position: relative;
`;
export const InputText = styled.input`
  width: 300px;
  border: none;
  outline: none;
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
`;

export const Error = styled.p`
  color: #ff1313;
  font-size: 1rem;
  margin: 0.5rem 0;
`;
