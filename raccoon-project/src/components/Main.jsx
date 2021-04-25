import styled from 'styled-components';
import Article from './arcticle/Article';

const Main = ({ data }) => {
  return (
    <MainStyle>
      {data.map((article) => (
        <Article {...{ article }} />
      ))}
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.div``;
