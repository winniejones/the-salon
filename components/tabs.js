import React from "react";
import styled from "styled-components";

const StyledTabs = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.15px;
`;
const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  list-style-type: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
`;
function Tabs({ children }) {
  return (
    <StyledTabs>
      <TabList>{children}</TabList>
    </StyledTabs>
  );
}

export default Tabs;
