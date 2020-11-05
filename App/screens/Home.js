import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import fonts from '../extras/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: fonts.syneMono.regular, fontSize: 26}}>
        Home Screen
      </Text>
      <Text style={{fontSize: 26}}>Home Screen</Text>
    </View>
  );
};

export default Home;
