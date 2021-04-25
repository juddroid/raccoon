import styled from 'styled-components';

const Aside = () => {
  return (
    <AsideStyle>
      <img
        src="https://juddroid.github.io/assets/img/favicons/ms-icon-310x310.png"
        alt="aside"
      />
      <p>Personal blog by Raccoon. I explain with words and code.</p>
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
    border: 1px solid #fff;
  }

  p {
    color: #fff;
    max-width: 310px;
    margin-bottom: 1.75rem;
  }
`;
