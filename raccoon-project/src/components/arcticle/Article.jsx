import { useRef } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Article = ({ article }) => {
  const viewerRef = useRef();

  console.log(viewerRef);
  // const viewerInstance = viewerRef && viewerRef.current.getInstance();
  // const htmlContent = viewerRef && viewerInstance.setHtml();

  return (
    <ArticleStyle>
      <Header {...{ article }} />
      <p>{article.content}</p>
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
