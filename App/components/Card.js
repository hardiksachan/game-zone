import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <View style={styles.cardContent}>
        <ScrollView>{props.children}</ScrollView>
      </View>
    </View>
  );
};

export default Card;
