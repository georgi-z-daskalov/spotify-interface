import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {goToLogIn, navPushTo} from '../components/navigation';
import {IBaseComponent} from '../types/screens';

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
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button onPress={this.logout} title="Sign Out" />
        <Button
          onPress={() => navPushTo(this.props.componentId, 'Screen2')}
          title="View next screen"
        />
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
