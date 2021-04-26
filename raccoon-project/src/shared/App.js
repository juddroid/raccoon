import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aside from '../components/aside/Aside';
import Header from '../components/header/Header';
import Main from '../components/Main';
import firebase from '../firebase';

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    title: '',
    contents: '',
  });

  const testRef = firebase.database().ref('article');

  // useEffect(() => {
  //   setUserData({
  //     ...userData,
  //     title: 'Title',
  //     contents: 'Contents',
  //   });
  //   testRef.push(userData);
  // }, []);

  useEffect(() => {
    testRef.on('value', (snapshot) => {
      const test = snapshot.val();
      const fetchData = [];

      console.log(test);
      for (let id in test) {
        fetchData.push({ ...test[id], id });
      }

      setData(fetchData);
    });
  }, []);

  if (!data) return null;

  console.log(data);
  return (
    <AppStyle className="App">
      <Header />
      <Aside />
      <Main {...{ data }} />
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
