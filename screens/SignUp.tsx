import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToLogIn, goToHome} from '../components/navigation';
import {IBaseComponent, IAuthState} from '../types/types';

export default class SignUp extends React.Component<
  IBaseComponent,
  IAuthState
> {
  state: IAuthState = {email: '', password: '', errorMessage: undefined};
  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => goToHome())
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <View>
          <Text>Already have an account? </Text>
          <Text onPress={goToLogIn}>Login</Text>
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
