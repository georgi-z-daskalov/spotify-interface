import React from 'react';
import {View} from 'react-native';
import {Text, Button, ThemeProvider, Theme} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {goToLogIn, displayPlayer} from '../components/navigation';
import {IBaseComponent} from '../types/screens';
import {theme} from '../styles/theme';

export default class Home extends React.Component<IBaseComponent> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
    };
  }
  logout = () => {
    auth()
      .signOut()
      .then(() => goToLogIn())
      .catch(error => console.log('error', error));
  };
  render() {
    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={[theme.container, theme.mainWrapper]}>
          <Text>Hello from Home screen.</Text>
          <Button onPress={displayPlayer} title="Show player" />
        </View>
      </ThemeProvider>
    );
  }
}
