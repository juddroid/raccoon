import { Viewer } from '@toast-ui/react-editor';
import { useRef } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Article = ({ article }) => {
  const viewerRef = useRef();

  const setArticleContent = (content) => {
    const viewerInstance = viewerRef.current.getInstance();
    const markdownContent = viewerInstance.setMarkdown(content);
    return markdownContent;
  };

  return (
    <ArticleStyle>
      <Header {...{ article }} />
      <p>{article.subTitle}</p>
      {/* <Viewer
        ref={viewerRef}
        initialValue={setArticleContent(article.subTitle)}
      /> */}
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
