import styled from 'styled-components';
import { getSmallDate } from '../../util';

const SmallDate = ({ date }) => {
  return <SmallDateSytle>{getSmallDate(new Date(date))}</SmallDateSytle>;
};

export default SmallDate;

const SmallDateSytle = styled.div``;
