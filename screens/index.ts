import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Loading', () => require('./Loading').default);
  Navigation.registerComponent('Login', () => require('./LogIn').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('Screen2', () => require('./Screen2').default);
}
