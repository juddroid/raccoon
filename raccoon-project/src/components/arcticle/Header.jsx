import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <h3>Article</h3>
      <small>small</small>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  h3 {
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
    margin-bottom: 0.4375rem;
    margin-top: 3.5rem;
    color: #ffa7c4;
  }

  color: #fff;
`;
