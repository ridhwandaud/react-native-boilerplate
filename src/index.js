// root of the app

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './screens';

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;