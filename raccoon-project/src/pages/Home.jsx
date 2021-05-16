import { Route } from 'react-router';
import styled from 'styled-components';
import { Post } from '.';
import DetailArticle from '../components/arcticle/DetailArticle';
import AsideMain from '../components/aside/AsideMain';
import Header from '../components/header/Header';
import Main from '../components/Main';

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <AsideMain />
      <Route exact path="/" component={Main} />
      <Route exact path="/pages/post" component={Post} />
      <Route exact path="/pages/post/:title" component={DetailArticle} />
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  position: relative;
  width: 43rem;
  padding: 2.625rem 1.3125rem;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font: 100%/1.75 'Merriweather', 'Georgia', serif;
`;
