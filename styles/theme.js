const MEDIUM_SIZE = 13;
const LARGE_SIZE = 15;
const PRIMARY_COLOR = 'teal';
const SECONDARY_COLOR = 'orangered';

const multiplySize = (multiply, size) => multiply * size;

export const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
  },
  Text: {
    fontSize: MEDIUM_SIZE,
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
};
