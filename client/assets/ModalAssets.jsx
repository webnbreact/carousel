import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const HideOverFlow = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ModalStyled = styled.div`
  position: absolute;
  // border: 5px dashed yellow;
  min-width: 90%;
  min-height: 90%;
  width: 96vw;
  margin-left: 2vw;
  margin-right: 2vw;
`;

export const RightArrowSVG = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: "4.8em", width: "4.8em", fill: "rgb(255, 255, 255)" }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" /></svg>
);

export const CloseButtonSVG = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "2em", width: "2em", display: "block", fill: "rgb(255, 255, 255)" }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" /></svg>
);

export const CloseButtonStyled = styled.div`
top:10px;
right: 5px;
height: 100%;
position: absolute;
`;

export const GoRightStyled = styled.div`
  font-size: .5em;
  top: ${({ top }) => top}px;
  margin-left:3vw;
  // border: 2px solid brown;
  position: absolute;
  right: 5px;
`;
export const GoLeftStyled = styled.div`
  font-size: .5em;
  position: absolute;
  top: ${({ top }) => top}px;
  left: 5px;
  min-width: 3vw;
  margin-right: 3vw;
  transform: rotate(180deg);
 
`;