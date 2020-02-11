import {Navigation} from 'react-native-navigation';
import {DARK_GREY_COLOR} from '../styles/theme';

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
            animate: true, // Controls whether BottomTabs visibility changes should be animated
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
                  text: '',
                  icon: require('../assets/img/home.png'),
                  selectedIcon: require('../assets/img/home_active.png'),
                },
              },
            },
          },
          {
            component: {
              name: 'Search',
              options: {
                bottomTab: {
                  text: '',
                  icon: require('../assets/img/search.png'),
                  selectedIcon: require('../assets/img/search_active.png'),
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
      name: componentName,
    },
  });
};
