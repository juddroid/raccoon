import styled from 'styled-components';
import Header from './Header';

const Article = ({ article }) => {
  return (
    <ArticleStyle>
      <Header {...{ article }} />
      <p>{article.subContent}</p>
    </ArticleStyle>
  );
};

export default Article;

const ArticleStyle = styled.article`
  color: #fff;

  p {
    margin-bottom: 1.75rem;
  }
`;
