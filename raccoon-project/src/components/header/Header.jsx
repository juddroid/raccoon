import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TITLE } from '../const';
import ReactToggle from '../toggle/ReactToggle';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTitleStyle>
        <Link to="/">
          <h1>{TITLE}</h1>
        </Link>
      </HeaderTitleStyle>
      <ReactToggle />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  h1 {
    font-size: 1.98818rem;
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    color: #fff;
    line-height: 2.625rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`;

const HeaderTitleStyle = styled.div`
  a {
    text-decoration: none;
  }
`;
