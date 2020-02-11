import React from 'react';
import {View, ViewStyle} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToSignUp, goToHome} from '../components/navigation';
import {IBaseComponent, IAuthState} from '../types/screens';
import {Button, Input, Text, ThemeProvider, Theme} from 'react-native-elements';
import {theme} from '../styles/theme';

export default class Login extends React.Component<IBaseComponent, IAuthState> {
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
  handleLogin = () => {
    const {email, password} = this.state;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => goToHome())
      .catch(error => this.setState({errorMessage: error.message}));
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
            />
            <Input
              secureTextEntry
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              errorMessage={this.state.errorMessage}
            />
          </View>
          <View style={theme.bottomComponent as ViewStyle}>
            <Button title="Log in" onPress={this.handleLogin} />
            <View style={theme.oneLineText as ViewStyle}>
              <Text>Don't have an account? </Text>
              <Text style={theme.secondaryColor} onPress={goToSignUp}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ThemeProvider>
    );
  }
}
