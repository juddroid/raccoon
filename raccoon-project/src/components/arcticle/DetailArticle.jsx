import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailArticleHeader from './DetailArticleHeader';
import firebase from '../../firebase';
import DetailViewer from '../viewer/DetailViewer';

const DetailArticle = ({ location }) => {
  const [detailArticle, setDetailArticle] = useState(null);

  const articleRef = firebase.database().ref('article');

  useEffect(() => {
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      const currentArticle = article[location.state.id];
      setDetailArticle(currentArticle);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!detailArticle) return null;

  return (
    <DetailArticleStyle>
      <DetailArticleHeader {...{ detailArticle }} />
      <DetailViewer {...{ detailArticle }} />
    </DetailArticleStyle>
  );
};

export default DetailArticle;

const DetailArticleStyle = styled.div`
  margin-top: 3.5rem;
`;
