const fonts = {
  nunito: {
    regular:
      Platform.OS === 'windows'
        ? 'Assets/Fonts/Nunito-Regular.tff#Nunito'
        : 'Nunito-Regular',
    semibold:
      Platform.OS === 'windows'
        ? 'Assets/Fonts/Nunito-SemiBold.tff#Nunito SemiBold'
        : 'Nunito-Semibold',
  },
  syneMono: {
    regular:
      Platform.OS === 'windows'
        ? 'Assets/Fonts/SyneMono-Regular.ttf#Syne Mono'
        : 'SyneMono-Regular',
  },
};

export default fonts;
