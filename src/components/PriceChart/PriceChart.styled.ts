import styled from "styled-components";

const PriceChartContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 49.5%;

  padding: 15px;

  background-color: #ffffff;

  border-radius: 25px;
`;

const PriceChartTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export { PriceChartContainer, PriceChartTitle };
