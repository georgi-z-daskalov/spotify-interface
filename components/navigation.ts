import {Navigation} from 'react-native-navigation';

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

export const goToHome = () => goTo('Home');

export const goToLogIn = () => goTo('Login');

export const goToSignUp = () => goTo('SignUp');

export const navPushTo = (componentId: string, componentName: string): void => {
  Navigation.push(componentId, {
    component: {
      name: componentName,
    },
  });
};
