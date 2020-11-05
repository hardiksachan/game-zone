import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './routes/homeStack';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
