import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import NewReview from '../screens/Modals/NewReview';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const customScreenOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: 'transparent'},
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

const HomeModalSack = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={customScreenOptions}>
      <Stack.Screen name="MainHomeStack" component={HomeStack} />
      <Stack.Screen name="NewReviewModal" component={NewReview} />
    </Stack.Navigator>
  );
};

export default HomeModalSack;
