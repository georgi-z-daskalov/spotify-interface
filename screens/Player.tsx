import React from 'react';
import {View, ViewStyle, Modal} from 'react-native';
import {IBaseComponent, IAuthState} from '../types/screens';
import {
  Button,
  ThemeProvider,
  Theme,
  Header,
  Text,
} from 'react-native-elements';
import {theme} from '../styles/theme';
import {Navigation} from 'react-native-navigation';
import {HidePlayerButton} from '../components/HidePlayerButton';

export default class Player extends React.Component<IBaseComponent> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Login',
        },
      },
    };
  }
  hidePlayer = () => Navigation.dismissOverlay(this.props.componentId);

  render() {
    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={theme.player as ViewStyle}>
          <Modal animationType="slide" transparent={false} visible={true}>
            <View>
              <HidePlayerButton componentId={this.props.componentId} />
              <Text>Current track name</Text>
            </View>
            <Button title="Hide Player" onPress={this.hidePlayer} />
          </Modal>
        </View>
      </ThemeProvider>
    );
  }
}
