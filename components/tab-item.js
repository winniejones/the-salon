import React from "react";
import styled from "styled-components";

const StyledTabItem = styled.button`
  display: flex;
  align-items: center;
  flex-grow: 1;

  padding: 1rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  background-color: white;

  display: inline-block;

  border-bottom: ${(props) => (props.
// @ts-ignore
  borderBottom ? "0.5px solid #b69f58" : 0)};

  &:hover {
    border-bottom: 0.5px solid rgb(209 213 219);
    color: rgb(75 85 99);
  }
`;
function TabItem({ children, isActive, onClick }) {
  return (
    <StyledTabItem 
// @ts-ignore
    borderBottom={isActive} onClick={() => onClick(children)}>
      {children}
    </StyledTabItem>
  );
}

export default TabItem;
