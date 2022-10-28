const tintColorLight = '#2f95dc';
const tintColorDark = '#c9910e';

export default {
  light: {
    text: '#000',
    background: '#fff',
    contrastText: tintColorLight,
    boxShadow: 'rgba(149, 157, 165, 0.2)',
    searchBarBackground: 'rgba(224, 224, 215, 0.4)',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: tintColorDark,
    background: '#000',
    contrastText: '#FFF',
    boxShadow: 'rgba(255, 255, 255, 0.2)',
    searchBarBackground: 'rgba(224, 224, 215, 0.2)',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};