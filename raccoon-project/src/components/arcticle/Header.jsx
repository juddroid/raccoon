import styled from 'styled-components';

const Header = ({ article }) => {
  const fileName = article.title;
  return (
    <HeaderStyle>
      <h3>
        <a href={fileName}>{article.title}</a>
      </h3>
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
    line-height: 1.1;

    a {
      cursor: pointer;
      text-decoration: none;
      color: #ffa7c4;
    }
  }

  small {
    font-size: 80%;
  }
`;
