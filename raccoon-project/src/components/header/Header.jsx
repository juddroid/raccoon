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
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    color: #fff;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
