import styled from 'styled-components';
import ReactToggle from '../toggle/ReactToggle';

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Header</h1>
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
