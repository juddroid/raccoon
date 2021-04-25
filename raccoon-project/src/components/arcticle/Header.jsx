import styled from 'styled-components';

const Header = ({ article }) => {
  console.log(article);
  return (
    <HeaderStyle>
      <h3>{article.title}</h3>
      <small>small</small>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  color: #fff;

  h3 {
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
    margin-bottom: 0.4375rem;
    margin-top: 3.5rem;
    color: #ffa7c4;
    line-height: 1.1;
  }

  small {
    font-size: 80%;
  }
`;
