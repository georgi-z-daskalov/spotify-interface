import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Browse', () => require('./Browse').default);
  Navigation.registerComponent('Loading', () => require('./Loading').default);
  Navigation.registerComponent('Login', () => require('./LogIn').default);
  Navigation.registerComponent('ForgottenPassword', () => require('./ForgottenPassword').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('Search', () => require('./Search').default);
}
