import React from 'react';
import {View, ViewStyle} from 'react-native';
import {IBaseComponent, IAuthState} from '../types/screens';
import {Button, ThemeProvider, Theme} from 'react-native-elements';
import {theme} from '../styles/theme';
import {Navigation} from 'react-native-navigation';

export default class Player extends React.Component<
  IBaseComponent,
  IAuthState
> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Login',
        },
      },
    };
  }
  state: IAuthState = {email: '', password: '', errorMessage: '\n'};
  hidePlayer = () => Navigation.dismissOverlay(this.props.componentId);

  render() {
    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={[theme.container, theme.player] as ViewStyle}>
          <Button title="Hide Player" onPress={this.hidePlayer} />
        </View>
      </ThemeProvider>
    );
  }
}
