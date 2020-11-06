import './imports/platformImports';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigator from './routes/drawer';

const App = () => {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
