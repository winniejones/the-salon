import React from "react";
import styled from "styled-components";

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("/assets/icons/svg/icn_chevron_down.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  width: 100%;
  height: 3rem;
  padding: 0.625rem;
  border: 0;
`;
const Option = styled.option`
  border: 0;
  background-color: transparent;
  -webkit-appearance: none;
`;
function FilterSelect({ filterValues }) {
  return (
    <>
      <Select id='price_range'>
        {filterValues.map((value) => (
          <Option key={value}>{value}</Option>
        ))}
      </Select>
    </>
  );
}

export default FilterSelect;
