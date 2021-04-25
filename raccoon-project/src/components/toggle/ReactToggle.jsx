import styled from 'styled-components';

const ReactToggle = () => {
  return (
    <ReactToggleStyle>
      <ReactToggleTrack />
      <ReactToggleTrackCheck />
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

const ReactToggleTrack = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #0f1114;
  transition: all 0.2s ease;
`;

const ReactToggleTrackCheck = styled.div`
  border: 1px solid white;
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
