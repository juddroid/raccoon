import styled from 'styled-components';
import { ASIDE_INSTAGRAM, ASIDE_PROFILE } from '../const';

const Aside = () => {
  return (
    <AsideStyle>
      <img src={ASIDE_PROFILE} alt="aside" />
      <p>
        Personal blog by <a href={ASIDE_INSTAGRAM}>Raccoon</a>. <br />I explain
        with words and code.
      </p>
    </AsideStyle>
  );
};

export default Aside;

const AsideStyle = styled.aside`
  display: flex;
  align-items: center;
  margin-bottom: 3.5rem;

  img {
    margin-right: 0.875rem;
    margin-bottom: 1.75rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    /* border: 1px solid #fff; */
  }

  p {
    color: #fff;
    max-width: 310px;
    margin-bottom: 1.75rem;

    a {
      box-shadow: 0 1px 0 0 currentColor;
      color: #ffa7c4;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
