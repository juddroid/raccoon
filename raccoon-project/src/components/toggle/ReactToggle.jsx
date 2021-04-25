import { useState } from 'react';
import styled from 'styled-components';
import ReactToggleThumb from './ReactToggleThumb';
import ReactToggleTrack from './ReactToggleTrack';

const ReactToggle = () => {
  const [modePosition, setModePosition] = useState(0);

  const onToggleMode = () => {
    if (modePosition === 0) return setModePosition(26);
    setModePosition(0);
  };
  return (
    <ReactToggleStyle onClick={onToggleMode}>
      <ReactToggleTrack />
      <ReactToggleTrackCheck />
      <ReactToggleThumb {...{ modePosition }} />
    </ReactToggleStyle>
  );
};

export default ReactToggle;

const ReactToggleStyle = styled.div`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
`;

const ReactToggleTrackCheck = styled.div`
  border: 1px solid #fff;
  position: absolute;
  width: 17px;
  height: 17px;
  left: 5px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease;
`;
