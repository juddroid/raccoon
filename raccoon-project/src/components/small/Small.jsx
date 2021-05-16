import styled from 'styled-components';
import SmallDate from './SmallDate';
import SmallDot from './SmallDot';
import SmallRead from './SmallRead';

const Small = ({ date }) => {
  return (
    <SmallStyle>
      <SmallDate {...{ date }} />
      <SmallDot />
      <SmallRead />
    </SmallStyle>
  );
};

export default Small;

const SmallStyle = styled.small`
  font-size: 80%;
  display: flex;
`;
