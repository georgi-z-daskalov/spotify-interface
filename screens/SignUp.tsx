import React from 'react';
import {View, ViewStyle} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToLogIn, goToHome} from '../components/navigation';
import {IBaseComponent, IAuthState} from '../types/screens';
import {Button, Text, ThemeProvider, Theme, Input} from 'react-native-elements';
import {theme} from '../styles/theme';

export default class SignUp extends React.Component<
  IBaseComponent,
  IAuthState
> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Sign up',
        },
      },
    };
  }
  state: IAuthState = {email: '', password: '', errorMessage: undefined};
  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
            <Button title="Sign up" onPress={this.handleSignUp} />
            <View style={theme.oneLineText as ViewStyle}>
              <Text>Don't have an account? </Text>
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
