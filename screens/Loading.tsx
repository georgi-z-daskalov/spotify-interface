import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToLogIn, goTo} from '../components/navigation';

export default class Loading extends React.Component {
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      user ? goTo('SpotifyAuth') : goToLogIn();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
});
