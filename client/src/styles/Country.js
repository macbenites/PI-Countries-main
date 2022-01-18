import styled from "styled-components";
import { LinkTo } from "../styles/Link";

export const CountryContainer = styled.div`
  width: 285px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  img {
    width: 100%;
    height: 180px;
    border-radius: 1rem 1rem 0 0;
  }

  :hover {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  }
`;

export const Details = styled(LinkTo)`
  color: var(--text-color);
`;

export const Info = styled.div`
  margin-top: 0;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;

  height: 150px;
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: normal;
    span {
      font-weight: bold;
    }
  }
`;
