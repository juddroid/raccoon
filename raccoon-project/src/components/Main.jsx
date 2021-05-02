import styled from 'styled-components';
import Article from './arcticle/Article';

const Main = ({ data }) => {
  return (
    <MainStyle>
      {data.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main``;
