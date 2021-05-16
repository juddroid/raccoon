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
  border: 1px solid red;
  color: #fff;
`;
