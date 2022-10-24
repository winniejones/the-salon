import React from "react";
import styled from "styled-components";
// @ts-ignore
import SettingsIcon from "../public/assets/icons/svg/icn_settings.svg";
// @ts-ignore
import ChevronLeftIcon from "../public/assets/icons/svg/icn_chevron_left.svg";
import IconButton from "./icon-button";
import { Content, RowSpaceBetween } from "./common-styles";
import { useRouter } from "next/router";

const StyledHeader = styled.div`
  font-family: "MillerBanner";
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 24px;
  color: #202020;
`;
function ListHeader({ header, url }) {
  const router = useRouter();
  return (
    <Content>
      <RowSpaceBetween>
        <IconButton onClick={() => router.push(url)}>
          <ChevronLeftIcon />
        </IconButton>
        <StyledHeader>{header}</StyledHeader>
        <SettingsIcon />
      </RowSpaceBetween>
    </Content>
  );
}

export default ListHeader;
