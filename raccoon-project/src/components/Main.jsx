import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Article from './arcticle/Article';
import firebase from '../firebase';

const Main = () => {
  const [data, setData] = useState([]);

  const articleRef = firebase.database().ref('article');

  useEffect(() => {
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      const articleList = [];

      for (let id in article) {
        articleList.push({ ...article[id], id });
      }

      setData(articleList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  return (
    <MainStyle>
      {[...data].reverse().map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main``;
