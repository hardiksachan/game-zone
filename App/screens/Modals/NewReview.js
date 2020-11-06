import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from '../../components/Card';

const styles = StyleSheet.create({
  modalClose: {
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {flex: 0.8},
});

const NewReview = ({navigation}) => {
  return (
    <View style={styles.modalContainer}>
      <Card style={styles.modalCard}>
        <MaterialIcons
          name="close"
          size={24}
          onPress={() => navigation.goBack()}
          style={styles.modalClose}
        />
        <Text>Hello from Modal</Text>
      </Card>
    </View>
  );
};

export default NewReview;
