import Link from "next/link";
import React from "react";
import styled from "styled-components";
import StarRating from "./star-rating";
// @ts-ignore
import ChevronRightIcon from "../public/assets/icons/svg/icn_chevron_right.svg";
import { ItemContent, ItemName, RowSpaceBetween } from "./common-styles";
import IconButton from "./icon-button";
import { useRouter } from "next/router";

const OpenSans = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
`;

const StreetInfo = styled(OpenSans)`
  font-size: 15px;
  line-height: 20px;

  color: #656565;
`;
const CostInfo = styled(OpenSans)`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;
const DurationInfo = styled(OpenSans)`
  font-size: 13px;
  line-height: 16px;

  text-align: right;

  color: #656565;
`;
const StartTime = styled.div`
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #202020;
`;
const StartColumn = styled(OpenSans)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;
const EndColumn = styled.div``;
const MiddleColumn = styled.div`
  flex-grow: 1;
  margin: 0 16px;
  flex-shrink: 0;
`;

const ListDivide = styled.li`
  margin: 0 16px 0 16px;
  padding: 16px 0 16px 0;
  border-bottom: 0.5px solid #eeeeee;

  border-radius: 0.75rem;
  &:hover {
    background-color: rgb(243 244 246);
  }
`;

function SalonListItem({ salonInfo }) {
  const {
    start,
    title,
    rating,
    reviews,
    cost,
    duration,
    slug,
    location: { street },
  } = salonInfo;
  const router = useRouter();
  return (
    <ListDivide>
      <ItemContent>
        <StartColumn>
          <StartTime>{start}</StartTime>
        </StartColumn>
        <MiddleColumn>
          <RowSpaceBetween>
            <ItemName>{title}</ItemName>
            <CostInfo>{cost}</CostInfo>
          </RowSpaceBetween>
          <RowSpaceBetween>
            <StarRating
              rating={rating}
              totalRatings={reviews}
              textColor={undefined}
            />
            <DurationInfo>{duration}</DurationInfo>
          </RowSpaceBetween>
          <RowSpaceBetween>
            <StreetInfo>{street}</StreetInfo>
          </RowSpaceBetween>
        </MiddleColumn>
        <EndColumn>
          <ChevronRightIcon onClick={() => router.push(`/salons/${slug}`)} />
        </EndColumn>
      </ItemContent>
    </ListDivide>
  );
}

export default SalonListItem;
