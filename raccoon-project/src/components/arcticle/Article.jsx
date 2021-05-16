import styled from 'styled-components';
import ArticleHeader from './ArticleHeader';

const Article = ({ article }) => {
  return (
    <ArticleStyle>
      <ArticleHeader {...{ article }} />
      <p>{article.subTitle}</p>
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
