import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Small from '../small/Small';

const ArticleHeader = ({ article }) => {
  const fileName = article.title;
  return (
    <HeaderStyle>
      <Link
        to={{
          pathname: `pages/post/${fileName}`,
          state: {
            id: `${article.id}`,
          },
        }}
      >
        <h3>{article.title}</h3>
      </Link>

      <Small date={article.date} />
    </HeaderStyle>
  );
};

export default ArticleHeader;

const HeaderStyle = styled.div`
  color: #fff;

  h3 {
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
    margin-bottom: 0.4375rem;
    margin-top: 3.5rem;
    line-height: 1.1;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #ffa7c4;
  }

  small {
    font-size: 80%;
  }
`;
