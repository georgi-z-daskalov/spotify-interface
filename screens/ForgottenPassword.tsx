import React from 'react';
import {View, ViewStyle} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToLogIn} from '../components/navigation';
import {IBaseComponent, IAuthState} from '../types/screens';
import {Button, Input, Text, ThemeProvider, Theme} from 'react-native-elements';
import {theme} from '../styles/theme';

const actionCodeSettings = {
  url: 'https://spotifyinterface.page.link',
  iOS: {
    bundleId: 'org.reactjs.native.example.SpotifyInterface',
  },
  android: {
    packageName: 'com.spotifyinterface',
    installApp: true,
  },
  handleCodeInApp: true,
};

export default class ForgottenPassword extends React.Component<IBaseComponent> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Forgotten password',
        },
      },
    };
  }
  state = {email: '', errorMessage: ' '};
  handleResetPassword = () => {
    const {email} = this.state;

    console.log('handleResetPassword', email);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => goToLogIn())
      .catch(error => {
        console.log('error', error.message);
        this.setState({errorMessage: error.message});
      });
  };

  render() {
    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={theme.spaceBetweenView as ViewStyle}>
          <View style={theme.alignBottom as ViewStyle}>
            <Input
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              errorMessage={this.state.errorMessage}
            />
          </View>
          <View style={theme.bottomComponent as ViewStyle}>
            <Button title="Reset password" onPress={this.handleResetPassword} />
            <View style={theme.oneLineText as ViewStyle}>
              <Text>Remember password? </Text>
              <Text style={theme.secondaryColor} onPress={goToLogIn}>
                Log in
              </Text>
            </View>
          </View>
        </View>
      </ThemeProvider>
    );
  }
}
