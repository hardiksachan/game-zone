import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from '../../components/Card';
import ModalContainer from '../../components/ModalContainer';
import {globalStyles} from '../../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

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
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  modalCard: {
    flex: 1,
    flexDirection: 'column',
  },
});

const NewReview = ({navigation}) => {
  return (
    <ModalContainer style={styles.modalContainer}>
      <Card style={styles.modalCard}>
        <MaterialIcons
          name="close"
          size={24}
          onPress={() => navigation.goBack()}
          style={styles.modalClose}
        />
        <Formik
          initialValues={{title: '', body: '', rating: ''}}
          onSubmit={(values) => {
            navigation.navigate('MainHomeStack', {
              screen: 'Home',
              params: {newReview: values},
            });
          }}
          validationSchema={reviewSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              <Text style={globalStyles.errorText}>
                {touched.title && errors.title}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Body"
                onChangeText={handleChange('body')}
                onBlur={handleBlur('body')}
                value={values.body}
                multiline
              />
              <Text style={globalStyles.errorText}>
                {touched.body && errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={handleChange('rating')}
                onBlur={handleBlur('rating')}
                value={values.rating}
                keyboardType="numeric"
              />
              <Text style={globalStyles.errorText}>
                {touched.rating && errors.rating}
              </Text>
              <Button onPress={handleSubmit} title="Submit" color="maroon" />
            </View>
          )}
        </Formik>
      </Card>
    </ModalContainer>
  );
};

export default NewReview;
