import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  span {
    background-color: #999;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 5px;
    margin: 0.3rem;
    width: 40px;
    padding: 0 10px;
    height: 40px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    cursor: pointer;
  }

  span:hover {
    background-color: #ff8906;
    color: #fff;
  }
`;
