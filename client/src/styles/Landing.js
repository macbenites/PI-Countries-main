import styled from "styled-components";
import { Button } from "./Button";

export const Landing = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  h1 {
    font-size: 2.5rem;
    color: #fffffe;
    margin-top: 1rem;
  }
  h2 {
    color: #ff8906;
  }
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 30%;
  height: 50%;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
`;
