import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeModalStack from './HomeModalStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="HomeStack"
        component={HomeModalStack}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{title: 'About'}}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigator;
