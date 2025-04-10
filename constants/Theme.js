import Colors from './Colors';

const Theme = {
  colors: Colors,
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    fontSize: {
      xs: 12,
      s: 14,
      m: 16,
      l: 18,
      xl: 20,
      xxl: 24,
      xxxl: 30,
    },
    lineHeight: {
      xs: 16,
      s: 20,
      m: 24,
      l: 28,
      xl: 32,
      xxl: 36,
      xxxl: 42,
    },
  },
  borderRadius: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    round: 9999,
  },
  shadows: {
    small: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 6.27,
      elevation: 5,
    },
    large: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.2,
      shadowRadius: 9.11,
      elevation: 10,
    },
  },
};

export default Theme;
