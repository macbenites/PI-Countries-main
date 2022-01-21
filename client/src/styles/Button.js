import styled, { css } from "styled-components";
export const Button = styled.button`
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  padding: 13px 20px;
  border-radius: 8px;
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

  :hover {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
    box-shadow: 0px 0px 10px -2px rgba(222, 222, 222, 0.75);
  }
`;
