import styled from 'styled-components';

const ReactToggleThumb = ({ modePosition }) => {
  return <ReactToggleThumbStyle {...{ modePosition }} />;
};

export default ReactToggleThumb;

const ReactToggleThumbStyle = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: ${({ modePosition }) => `translateX(${modePosition}px)`};
`;
