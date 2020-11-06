import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';
import {v4 as uuidv4} from 'uuid';
import Card from '../components/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

const Home = ({navigation, route}) => {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: uuidv4(),
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: uuidv4(),
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: uuidv4(),
    },
  ]);

  const addReview = (review) => {
    review.key = uuidv4();
    setReviews((currReviews) => [review, ...currReviews]);
  };

  useEffect(() => {
    if (route.params?.newReview) {
      addReview(route.params?.newReview);
    }
  }, [route.params?.newReview]);

  return (
    <View style={globalStyles.container}>
      <MaterialIcons
        style={styles.modalToggle}
        onPress={() => navigation.navigate('NewReviewModal')}
        name="add"
        size={24}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ReviewDetails', {
                item: item,
              })
            }>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
