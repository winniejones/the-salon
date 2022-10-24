import React from "react";
import styled from "styled-components";
import SalonListItem from "./salon-list-item";

const SalonsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
`;

function SalonList({ salons }) {
  const data = salons.flatMap(({ availableBooking, ...salon }) =>
    availableBooking.map((bookings) => ({
      ...salon,
      ...bookings,
      id: salon.title + "_" + bookings.start,
    }))
  );
  return (
    <SalonsContainer>
      {data.map((salonInfo) => (
        <SalonListItem key={salonInfo.id} salonInfo={salonInfo} />
      ))}
    </SalonsContainer>
  );
}

export default SalonList;
