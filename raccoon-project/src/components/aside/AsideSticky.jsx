import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../style/StyledButton';

const AsideSticky = () => {
  return (
    <AsideStickyStyle>
      <Link to="/pages/post">
        <StyledButton>Post</StyledButton>
      </Link>
      <Link to="/pages/post">
        <StyledButton>Algorithm</StyledButton>
      </Link>
      <Link to="/pages/post">
        <StyledButton>Think</StyledButton>
      </Link>
      <Link to="/pages/post">
        <StyledButton>Project</StyledButton>
      </Link>
      <Link to="/pages/post">
        <StyledButton>About</StyledButton>
      </Link>
    </AsideStickyStyle>
  );
};

export default AsideSticky;

const AsideStickyStyle = styled.div`
  position: sticky;
  border: 1px solid #ffa7c4;
  top: 100px;
  border-radius: 10px;
  color: #fff;
  height: 100px;
  width: 100%;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
`;
