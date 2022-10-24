import React from "react";

// @ts-ignore
import WebsiteIcon from "../public/assets/icons/svg/ic_website.svg";
// @ts-ignore
import AddressIcon from "../public/assets/icons/svg/icn_address.svg";
// @ts-ignore
import TimeIcon from "../public/assets/icons/svg/icn_time.svg";
import styled from "styled-components";
// @ts-ignore
import PhoneIcon from "../public/assets/icons/svg/icn_phone.svg";
import { MarginTop, MarginX, RowSpaceBetween } from "./common-styles";

const StyledText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;

  margin-left: 0.5rem;

  display: flex;
  align-items: center;

  color: #202020;
`;

const StyledRow = styled(RowSpaceBetween)`
  margin: 0 16px 0 16px;
  padding: 16px 0 16px 0;
  border-bottom: 0.5px solid #eeeeee;
  justify-content: flex-start;
  width: inherit;
`;

function SalonContent({ salonInfo }) {
  console.log({ salonInfo });
  const {
    location: { street, zip, region },
    openingHours: { closing },
    domain,
    tel,
    content,
  } = salonInfo;
  return (
    <>
      <MarginTop>
        <StyledRow>
          <AddressIcon />
          <StyledText>{street}</StyledText>,<StyledText>{zip}</StyledText>
          <StyledText>{region}</StyledText>
        </StyledRow>
        <StyledRow>
          <TimeIcon />
          <StyledText>Open until {closing} today</StyledText>
        </StyledRow>
        <StyledRow>
          <PhoneIcon />
          <StyledText>{tel}</StyledText>
        </StyledRow>
        <StyledRow>
          <WebsiteIcon />
          <StyledText>{domain}</StyledText>
        </StyledRow>
      </MarginTop>
      <MarginX>
        <StyledText dangerouslySetInnerHTML={{ __html: content }} />
      </MarginX>
    </>
  );
}

export default SalonContent;
