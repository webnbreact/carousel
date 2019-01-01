import styled from 'styled-components';

export const SlideShowGrid = styled.div`
  position: relative;
  color: green;
  background-color: rgb(72, 72, 72);
  top: ${({ top }) => top}px;
  width: auto;
  margin-left: 10vw;
  margin-right: 10vh;
  margin-top: 4vh;
  margin-bottom: 7vh;
  height: auto;
  border: 4px double violet;
`;

export const SlideShowFlex = styled.div`
  border: 4px dashed orange;
  display: flex;
  flex-direction: row;
  height: 70vh;
`;

export const SlideShowStyled = styled.div`
  height: auto;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  margin-top: 0vh;
  margin-bottom: 0vh;
  border: 8px dotted lightblue;
  position: relative;
`;