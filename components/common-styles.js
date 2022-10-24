import styled from "styled-components";

export const MillerBanner = styled.div`
  font-family: "MillerBanner";
  font-style: normal;
  font-weight: 300;
`;
export const RowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RowFlexStart = styled(RowSpaceBetween)`
  justify-content: flex-start;
`;
export const Content = styled.div`
  margin: 16px;
`;

export const ItemContent = styled(RowSpaceBetween)`
  height: 4rem;
`;

export const MarginX = styled.div`
  margin: 0 16px 0 16px;
`;

export const MarginTop = styled.div`
  margin-top: 16px;
`;

export const ItemName = styled(MillerBanner)`
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => (props.color ? props.color : "black")};
`;
