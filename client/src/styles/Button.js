import styled, { css } from "styled-components";
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  color: #fffffe;
  ${(props) => {
    if (props.primary) {
      return css`
        background-color: var(--primary);
      `;
    }
    if (props.secondary) {
      return css`
        background-color: var(--secondary);
      `;
    }
    if (props.tertiary) {
      return css`
        background-color: var(--tertiary);
      `;
    }
  }}
  svg {
    margin: 0;
    font-size: 1.1rem;
  }
  span {
    display: none;
  }
  :hover {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
    box-shadow: 0px 0px 10px -2px rgba(222, 222, 222, 0.75);
  }

  @media (min-width: 768px) {
    svg {
      display: none;
    }
    span {
      display: inline;
    }
  }
`;
