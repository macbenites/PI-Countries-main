import styled, { keyframes } from "styled-components";

export const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 16px solid var(--background-color);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left-color: var(--secondary);
  animation: ${spin} 1s linear infinite;
`;
