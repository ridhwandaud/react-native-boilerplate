// root of the app

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//redux
import {Provider} from 'react-redux';
import {store} from './store';

import Router from './screens/rootScreen';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
