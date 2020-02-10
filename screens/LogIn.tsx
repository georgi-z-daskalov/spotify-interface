import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToSignUp, goToHome} from '../components/navigation';
import {IBaseComponent, IAuthState} from '../types/types';

export default class Login extends React.Component<IBaseComponent, IAuthState> {
  state: IAuthState = {email: '', password: '', errorMessage: undefined};
  handleLogin = () => {
    const {email, password} = this.state;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => goToHome())
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <View>
          <Text>Don't have an account? </Text>
          <Text onPress={goToSignUp}>Sign Up</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});
