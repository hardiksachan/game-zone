import './imports/platformImports';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigator from './routes/drawer';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootDrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
