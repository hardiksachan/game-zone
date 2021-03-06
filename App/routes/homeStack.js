import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../extras/header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ccc',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Game Zone" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
