import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../style/StyledButton';

const AsideSticky = () => {
  return (
    <AsideStickyStyle>
      <Link to="/pages/post">
        <StyledButton>Post</StyledButton>
      </Link>
      <a href="/pages/post">
        <StyledButton>Algorithm</StyledButton>
      </a>
      <a href="/pages/post">
        <StyledButton>Think</StyledButton>
      </a>
      <a href="/pages/post">
        <StyledButton>Project</StyledButton>
      </a>
      <a href="/pages/post">
        <StyledButton>About</StyledButton>
      </a>
    </AsideStickyStyle>
  );
};

export default AsideSticky;

const AsideStickyStyle = styled.div`
  position: sticky;
  border: 1px solid #ffa7c4;
  border-radius: 10px;
  color: #fff;
  height: 100px;
  top: 310px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
