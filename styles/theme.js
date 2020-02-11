export const MEDIUM_SIZE = 13;
export const LARGE_SIZE = 15;
export const PRIMARY_COLOR = 'teal';
export const SECONDARY_COLOR = 'orangered';
export const DARK_GREY_COLOR = '#212121';
export const PRIMARY_TEXT_COLOR = '#fefefe';

const multiplySize = (multiply, size) => multiply * size;

export const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
  },
  Text: {
    style: {
      color: PRIMARY_TEXT_COLOR,
      fontSize: MEDIUM_SIZE,
    },
  },
  View: {
    backgroundColor: DARK_GREY_COLOR,
  },
  Button: {
    raised: true,
    containerStyle: {
      marginBottom: multiplySize(2, MEDIUM_SIZE),
    },
    titleStyle: {
      fontSize: LARGE_SIZE,
    },
  },
  Input: {
    containerStyle: {
      width: '85%',
      marginBottom: MEDIUM_SIZE,
      alignSelf: 'center',
    },
    inputStyle: {
      fontSize: MEDIUM_SIZE,
    },
  },
  alignBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomComponent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: multiplySize(3, LARGE_SIZE),
  },
  spaceBetweenView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  oneLineText: {
    flexDirection: 'row',
  },
  secondaryColor: {
    color: SECONDARY_COLOR,
  },
  mainWrapper: {
    backgroundColor: DARK_GREY_COLOR,
  },
  player: {
    backgroundColor: DARK_GREY_COLOR,
  },
};
