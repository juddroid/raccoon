import styled from 'styled-components';
import Header from './Header';

const Article = () => {
  return (
    <ArticleStyle>
      <Header />
      <p>article p tag</p>
    </ArticleStyle>
  );
};

export default Article;

const ArticleStyle = styled.article`
  color: #fff;
`;
