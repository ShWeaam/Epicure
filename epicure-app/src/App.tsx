import { AppDiv } from 'AppStyle';
import SetWindowSize from 'helpers/setWindowSize';
import Layout from './components/layout/Layout';
import { useFetchAndLoadDataToStates } from './services/loadDataToStates';
import React, { useEffect } from 'react'


function App() {

  const windowSize = SetWindowSize();
  const loadDataToStates = useFetchAndLoadDataToStates();

  // useEffect(() => {
  //   useFetchAndLoadDataToStates();
  // }, [])

  return (
    <AppDiv windowSize={windowSize} className='App'>
      <Layout />
    </AppDiv>
  );
}

export default App;
