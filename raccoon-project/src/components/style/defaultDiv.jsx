import React from 'react';
import styled from 'styled-components';
import {
  LARGE,
  MEDIUM,
  SIZE_DEFAULT_HEIGHT,
  SIZE_DEFAULT_WIDTH,
  SMALL,
} from '../const';

const LargeDiv = ({ type }) => {
  return <DefaultDivStyled type={type} />;
};
const MediumDiv = ({ type }) => {
  return <DefaultDivStyled type={type} />;
};
const SamllDiv = ({ type }) => {
  return <DefaultDivStyled type={type} />;
};

const DefaultDiv = ({ type }) => {
  return {
    large: <LargeDiv type={type} />,
    medium: <MediumDiv type={type} />,
    small: <SamllDiv type={type} />,
  }[type];
};

export default DefaultDiv;

const DefaultDivStyled = styled.div`
  ${({ type }) => {
    switch (type) {
      case LARGE:
        return `width: ${SIZE_DEFAULT_WIDTH + 100}px; height: ${
          SIZE_DEFAULT_HEIGHT + 50
        }px;`;
      case MEDIUM:
        return `width: ${SIZE_DEFAULT_WIDTH + 50}px; height: ${
          SIZE_DEFAULT_HEIGHT + 30
        }px;`;
      case SMALL:
        return `width: ${SIZE_DEFAULT_WIDTH}px; height: ${SIZE_DEFAULT_HEIGHT}px;`;
      default:
        return `width: ${SIZE_DEFAULT_WIDTH}px; height: ${SIZE_DEFAULT_HEIGHT}px;`;
    }
  }}
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
