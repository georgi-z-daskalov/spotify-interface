export const XSMALL_SIZE = 7;
export const SMALL_SIZE = 11;
export const MEDIUM_SIZE = 13;
export const LARGE_SIZE = 15;
export const XLARGE_SIZE = 19;
export const XXLARGE_SIZE = 23;
export const XXXLARGE_SIZE = 27;
export const PRIMARY_COLOR = 'teal';
export const SECONDARY_COLOR = 'orangered';
export const LIGHT_GREY_COLOR = '#e0e0e0';
export const DARK_GREY_COLOR = '#212121';
export const BLACK_COLOR = '#000000';
export const PRIMARY_TEXT_COLOR = '#fefefe';
export const ALBUM_IMG_SIZE = 64;
export const PLAYERBAR_HEIGHT = 66;

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
    flex: 1,
    alignItems: 'center',
  },
  playerBarWrap: {
    width: '100%',
    height: PLAYERBAR_HEIGHT,
    position: 'absolute',
    bottom: 0,
    backgroundColor: DARK_GREY_COLOR,
  },
  playerBar: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: PLAYERBAR_HEIGHT,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderBottomColor: BLACK_COLOR,
    borderBottomWidth: 0.5,
    album: {
      width: ALBUM_IMG_SIZE,
      height: ALBUM_IMG_SIZE,
    },
    trackPosition: {
      height: 1,
      backgroundColor: LIGHT_GREY_COLOR,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    infoText: {
      flexDirection: 'row',
      flex: 1,
      marginLeft: MEDIUM_SIZE,
      marginRight: LARGE_SIZE,
      song: {
        fontSize: MEDIUM_SIZE,
        fontWeight: 'bold',
      },
      artist: {
        fontSize: MEDIUM_SIZE,
        color: LIGHT_GREY_COLOR,
      },
    },
    buttons: {
      marginRight: LARGE_SIZE,
      width: LARGE_SIZE,
      height: LARGE_SIZE,
    },
  },
  homeSection: {
    paddingLeft: SMALL_SIZE,
    paddingRight: SMALL_SIZE,
    paddingTop: XLARGE_SIZE,
    scroll: {
      marginBottom: ALBUM_IMG_SIZE + MEDIUM_SIZE,
    },
    sectionHeader: {
      fontSize: multiplySize(2, SMALL_SIZE),
      color: PRIMARY_TEXT_COLOR,
      fontWeight: 'bold',
      marginBottom: SMALL_SIZE,
      marginTop: LARGE_SIZE,
    },
    list: {},
    recentlyPlayedListItem: {
      width: 135,
      img: {
        width: 125,
        height: 125,
        marginBottom: SMALL_SIZE,
      },
      trackName: {
        fontSize: MEDIUM_SIZE,
        color: PRIMARY_TEXT_COLOR,
        fontWeight: 'bold',
        width: 120,
      },
      albumInfo: {
        fontSize: MEDIUM_SIZE,
        color: LIGHT_GREY_COLOR,
        width: '85%',
      },
    },
  },
};
