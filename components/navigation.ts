import {Navigation} from 'react-native-navigation';
import {DARK_GREY_COLOR, PRIMARY_TEXT_COLOR} from '../styles/theme';

export const goTo = (componentName: string): void => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: componentName,
            },
          },
        ],
      },
    },
  });
};

export const goToHome = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            animate: false,
            backgroundColor: DARK_GREY_COLOR,
          },
        },
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                bottomTab: {
                  text: 'Home',
                  icon: require('../assets/img/home.png'),
                  selectedIcon: require('../assets/img/home_active.png'),
                  textColor: PRIMARY_TEXT_COLOR,
                  selectedTextColor: PRIMARY_TEXT_COLOR,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Browse',
                    options: {
                      topBar: {
                        visible: false,
                        drawBehind: true,
                        animate: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  icon: require('../assets/img/search.png'),
                  selectedIcon: require('../assets/img/search_active.png'),
                  textColor: PRIMARY_TEXT_COLOR,
                  selectedTextColor: PRIMARY_TEXT_COLOR,
                },
              },
            },
          },
        ],
      },
    },
  });

export const displayPlayer = () =>
  Navigation.showOverlay({
    component: {
      name: 'Player',
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
      },
    },
  });

export const goToLogIn = () => goTo('Login');

export const goToSignUp = () => goTo('SignUp');

export const goToForgotPass = () => goTo('ForgottenPassword');

export const navPushTo = (componentId: string, componentName: string): void => {
  Navigation.push(componentId, {
    component: {
      id: componentName,
      name: componentName,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
          animate: false,
        },
        animations: {
          pop: {
            waitForRender: true,
            enabled: true,
            content: {
              y: {
                from: 0,
                to: 1000,
                duration: 400,
                startDelay: 0,
                interpolation: 'accelerate',
              },
            },
          },
          push: {
            waitForRender: true,
            enabled: true,
            content: {
              y: {
                from: 1000,
                to: 1,
                duration: 400,
                startDelay: 0,
                interpolation: 'accelerate',
              },
            },
          },
        },
      },
    },
  });
};
