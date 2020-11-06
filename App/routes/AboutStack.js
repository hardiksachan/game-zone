import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../extras/header';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ccc',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About Game Zone" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
