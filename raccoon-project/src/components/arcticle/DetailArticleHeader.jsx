import styled from 'styled-components';
import Small from '../small/Small';

const DetailArticleHeader = ({ detailArticle }) => {
  return (
    <DetailArticleHeaderStyle>
      <h2>{detailArticle.title}</h2>
      <Small date={detailArticle.date} />
    </DetailArticleHeaderStyle>
  );
};

export default DetailArticleHeader;

const DetailArticleHeaderStyle = styled.div`
  color: #fff;

  h2 {
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
    margin-bottom: 0.4375rem;
    margin-top: 3.5rem;
    line-height: 1.1;
  }
`;
