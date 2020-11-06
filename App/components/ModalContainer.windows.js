import React from 'react';
import {View} from 'react-native';

const ModalContainer = ({children, ...props}) => {
  return <View {...props}>{children}</View>;
};

export default ModalContainer;
