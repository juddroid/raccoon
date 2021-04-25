import styled from 'styled-components';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Main from './components/Main';

function App() {
  return (
    <AppStyle className="App">
      <Header />
      <Aside />
      <Main />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font: 100%/1.75 'Merriweather', 'Georgia', serif;
`;
