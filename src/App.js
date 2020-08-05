import React, { useState } from 'react';

import { ApolloProvider } from '@apollo/client';
import client from './client';
import Login from './screens/Login';
import Titles from './screens/Titles';

const App = ({
  initialScreen
}) => {
  const [actualScreen, setActualScreen] = useState(initialScreen)

  const renderActualScreen = () => {
    switch (actualScreen) {
      case 'Login':
        return <Login afterLogin={() => setActualScreen('Titles')} />;
      case 'Titles':
        return <>
          <Titles afterLogout={() => setActualScreen('Login')} />
        </>;
      default:
        return (
          <div>Erro 404 - página não encontrada</div>
        )
    }
  }
  return (
    <ApolloProvider client={client} >
      {renderActualScreen()}
    </ApolloProvider>
  );
}

export default App;
