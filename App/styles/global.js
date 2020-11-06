import {StyleSheet} from 'react-native';
import fonts from '../extras/fonts';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontFamily: fonts.nunito.regular,
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {},
  errorText: {
    color: 'crimson',
    fontWeight: '300',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});
