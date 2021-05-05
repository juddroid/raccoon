import styled from 'styled-components';
import { ASIDE_INSTAGRAM, ASIDE_PROFILE } from '../const';

const AsideMain = () => {
  return (
    <AsideMainStyle>
      <ProfileImageDiv>
        <ProfileImageStyle src={ASIDE_PROFILE} alt="aside" />
      </ProfileImageDiv>
      <p>
        Personal blog by <a href={ASIDE_INSTAGRAM}>Raccoon</a>. <br />I explain
        with words and code.
      </p>
    </AsideMainStyle>
  );
};

export default AsideMain;

const AsideMainStyle = styled.aside`
  display: flex;
  align-items: center;

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

const ProfileImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.875rem;
  margin-bottom: 1.75rem;
  border-radius: 50%;
`;
const ProfileImageStyle = styled.img`
  width: 100%;
  transition: all ease-out 0.4s;

  :hover {
    width: 150%;
  }
`;
