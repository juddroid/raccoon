import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

const DetailArticle = ({ location }) => {
  return (
    <DetailArticleStyle>
      <Viewer initialValue={location.state.content} />
    </DetailArticleStyle>
  );
};

export default DetailArticle;

const DetailArticleStyle = styled.div`
  margin-top: 3.5rem;

  .tui-editor-contents p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  li,
  hr {
    color: #fff;
    line-height: 2;
    margin: 20px 0;
  }

  .tui-editor-contents h1 {
    font-size: 28px;
  }
  .tui-editor-contents p {
    font-size: 20px;
  }
  .tui-editor-contents li,
  .tui-editor-contents ul {
    font-size: 20px;

    ::before {
      color: #fff;
      line-height: 2;
    }
  }

  .tui-editor-contents code {
    color: #fff;
    background-color: #363c48;
    padding: 2px 3px;
    letter-spacing: -0.3px;
    border-radius: 5px;
    font-size: 16px;
  }

  .tui-editor-contents pre {
    margin: 2px 0 8px;
    padding: 18px;
    background-color: #363c48;
    border-radius: 5px;
  }
`;
