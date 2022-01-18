import styled from "styled-components";
import { Button } from "../styles/Button";

export const Container = styled.div`
  color: var(--text-color);
`;
export const Content = styled.div`
  display: flex;
`;

export const Info = styled.div`
  margin: 2rem 0;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 40%;
  padding: 2rem;
  border-right: 1px solid var(--border-color);

  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: normal;
  }
  span {
    color: #fff2ee;
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
  }
  h1 {
    margin: 0.5rem 0;
  }
`;

export const Activities = styled.div`
  margin: 2rem 0 0 2rem;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 60%;
  padding: 2rem;
  h3 {
    text-align: left;
    margin: 1rem 0;
  }
  h1 {
    margin: 0.5rem 0;
  }
`;

export const ActDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
  gap: 2.3rem;
`;

export const BtnDetail = styled(Button)``;

export const TopDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 0.5rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
