import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Aside from '../components/aside/Aside';
import Header from '../components/header/Header';
import Main from '../components/Main';
import firebase from '../firebase';

const Home = () => {
  const [data, setData] = useState([]);

  const articleRef = firebase.database().ref('article');
  const small = new Date();
  console.log(small);

  // useEffect(() => {
  //   const newArticle = {
  //     title: 'Algorithm',
  //     contents: 'about counting sort',
  //     small: `${small}`,
  //   };
  //   articleRef.push(newArticle);
  // }, []);

  // useEffect(() => {
  //   articleRef.update();
  // }, []);

  useEffect(() => {
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      const articleList = [];

      console.log(article);
      for (let id in article) {
        articleList.push({ ...article[id], id });
      }

      setData(articleList);
    });
  }, []);

  if (!data) return null;

  console.log(data);

  return (
    <HomeStyle>
      <Header />
      <Aside />
      <a href="/pages/post">Post</a>
      <Main {...{ data }} />
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font: 100%/1.75 'Merriweather', 'Georgia', serif;
`;
