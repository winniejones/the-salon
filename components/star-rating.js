import React from "react";
import styled from "styled-components";
// @ts-ignore
import StarOutlinedIcon from "../public/assets/icons/svg/icn_star_empty_small.svg";
// @ts-ignore
import StarFilledIcon from "../public/assets/icons/svg/icn_star_filled_small.svg";
import { RowFlexStart } from "./common-styles";

const RatingsStyle = styled.div`
  margin-left: 5px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 12px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const TotalRating = ({ totalRatings, color }) => {
  return <RatingsStyle color={color}>({totalRatings})</RatingsStyle>;
};

function StarRating({ rating, totalRatings, textColor }) {
  if (0 < rating || 5 < rating) new Error("rating value not valid");
  const fullStars = [...Array(rating).keys()];
  const emptyStartsValue = 5 - fullStars.length;
  const emptyStars = [...Array(emptyStartsValue).keys()];
  return (
    <RowFlexStart>
      {fullStars.map((star) => (
        <StarFilledIcon key={star} />
      ))}
      {emptyStars.map((star) => (
        <StarOutlinedIcon key={star} />
      ))}
      {totalRatings && (
        <TotalRating color={textColor} totalRatings={totalRatings} />
      )}
    </RowFlexStart>
  );
}

export default StarRating;
