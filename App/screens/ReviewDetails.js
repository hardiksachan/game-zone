import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Card from '../components/Card';
import {globalStyles} from '../styles/global';
import {images} from '../extras/images';

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

const ReviewDetails = ({route, navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.item.title}</Text>
        <Text>{route.params.item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.ratings[route.params.item.rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;
