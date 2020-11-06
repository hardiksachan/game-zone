import React from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ModalContainer = ({children, ...props}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View {...props}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default ModalContainer;
