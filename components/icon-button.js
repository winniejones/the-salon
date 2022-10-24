import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
  border-radius: 9999px;
  border-width: 0px;
  background-color: transparent;
  width: 2rem;
  height: 2rem;

  &:hover {
    background-color: rgb(243 244 246 0.4);
  }
`;
function IconButton({ children, onClick }) {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
}

export default IconButton;
