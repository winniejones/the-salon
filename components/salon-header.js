import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
// @ts-ignore
import ChevronLeftIcon from "../public/assets/icons/svg/icn_chevron_left.svg";
// @ts-ignore
import HeartIcon from "../public/assets/icons/svg/icn_heart.svg";
import { RowSpaceBetween, Column, ItemName } from "./common-styles";
import IconButton from "./icon-button";
import StarRating from "./star-rating";

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin: 16px;
`;

const StyledLeftIcon = styled(ChevronLeftIcon)`
  stroke: white;
`;

const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  background: ${(props) => `url(${props.resource}) no-repeat top center`};
`;

function SalonHeader({
  salonHeader: { title, coverImage, rating, reviews },
}) {
  const router = useRouter();
  return (
    <StyledPageHeader resource={coverImage}>
      <HeaderContent>
        <RowSpaceBetween>
          <IconButton onClick={() => router.back()}>
            <StyledLeftIcon />
          </IconButton>
          <HeartIcon />
        </RowSpaceBetween>
        <Column>
          <RowSpaceBetween>
            <ItemName color='white'>{title}</ItemName>
          </RowSpaceBetween>
          <RowSpaceBetween>
            <StarRating
              textColor='white'
              rating={rating}
              totalRatings={reviews}
            />
          </RowSpaceBetween>
          <RowSpaceBetween></RowSpaceBetween>
        </Column>
      </HeaderContent>
    </StyledPageHeader>
  );
}

export default SalonHeader;;
