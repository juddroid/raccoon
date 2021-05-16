import { Route } from 'react-router';
import styled from 'styled-components';
import AsideSticky from '../components/aside/AsideSticky';
import { Home } from '../pages';

function App() {
  return (
    <AppStyle className="App">
      <AsideStyle>
        <AsideSticky />
      </AsideStyle>
      <Route path="/" component={Home} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  position: relative;
  display: flex;
  margin-left: 200px;
  margin-right: auto;
  max-width: 86rem;
  padding: 2.625rem 1.3125rem;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font: 100%/1.75 'Merriweather', 'Georgia', serif;
`;

const AsideStyle = styled.div`
  position: relative;
  top: 270px;
  left: -30px;
`;
