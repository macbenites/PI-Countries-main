import styled from "styled-components";
export const Button = styled.button`
  color: #fff;
  background-color: #27ae60;
  border-style: none;
  box-sizing: border-box;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  padding: 13px 20px;
  border-radius: 8px;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;

  :hover {
    background-color: #1e8449;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
    box-shadow: rgba(39, 174, 96, 0.2) 0 6px 12px;
  }
`;
