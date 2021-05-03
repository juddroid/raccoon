import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AsideMain from '../components/aside/AsideMain';
import Header from '../components/header/Header';
import Main from '../components/Main';
import firebase from '../firebase';

const Home = () => {
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
  }, []);

  if (!data) return null;

  return (
    <HomeStyle>
      <Header />
      <AsideMain />
      <Main {...{ data }} />
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font: 100%/1.75 'Merriweather', 'Georgia', serif;
`;
