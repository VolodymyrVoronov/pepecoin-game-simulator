import styled from "styled-components";

import startPageBg01 from "assets/global-bg-01.jpg";

const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background-image: url(${startPageBg01});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StartTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 700px;

  padding: 30px;

  background-color: rgba(255, 255, 255, 0.95);

  border-radius: 25px;
`;

const StartText = styled.p`
  display: flex;

  margin: 15px 0;

  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

export { StartContainer, StartTextContainer, StartText };
