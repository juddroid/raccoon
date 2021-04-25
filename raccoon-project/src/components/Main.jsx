import styled from 'styled-components';
import Article from './arcticle/Article';

const Main = () => {
  return (
    <MainStyle>
      <Article />
      <Article />
      <Article />
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.div``;
