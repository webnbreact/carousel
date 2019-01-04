import styled, { css } from 'styled-components';

const Image = styled.div`

  // border: 3px solid green;
  background: no-repeat url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  width: 500px;
  height: 300px;
  ${({ highlightedPicIdx, currPicIdx }) => (highlightedPicIdx !== currPicIdx) && css`
    -webkit-filter: brightness(50%);
    // border: 5px solid red;
    transition: all .8s ease-out;
  `}
  

  ${({ inModal }) => inModal && css`
  : hover {
  color: #424242;
  background-size: cover;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -ms-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
  opacity: 1;
  transform: scale(1.3);
  -ms-transform: scale(1.3); /* IE 9 */
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  // border: 3px solid blue;

  `}
`;

const OverFlowWrap = styled.div`
  position: relative;
  overflow: hidden;
  // border: 1px solid transparent;
  width: 100 %;
  height: 100 %;

  ${({ inModal }) => !inModal && css`
    // border: 3px solid red;
    width:100%;
    height:100%;
  `}
`;

// CarouselLanding

const LandingPhotoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 40vw 40vw;
  grid-auto-rows: 50vh;
  // border: 3px solid purple;
  width:98vw;
  margin-right: 1vw;
  gap: 1px;
`;

const MainLandingPhotoStyled = styled.div`
  display: grid;
  grid-column: 1/3;
  gap: 0px;
`;

const SideLandingPhotoGrid = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: 1fr 1fr;
  // border:1px solid transparent;
  overflow:hidden;
  // border: 5px solid blue;
`;

module.exports = {
  Image,
  OverFlowWrap,
  LandingPhotoGrid,
  MainLandingPhotoStyled,
  SideLandingPhotoGrid,
};
