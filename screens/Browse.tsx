import React from 'react';
import {ViewStyle, ScrollView} from 'react-native';
import {ThemeProvider, Theme, Input, Button} from 'react-native-elements';
import {IBaseComponent} from '../types/screens';
import {theme} from '../styles/theme';
import PlayerBar from '../components/PlayerBar';
import Player from './Player';
import {Provider} from 'react-redux';
import {store} from '../reducers/index';
import LinearGradient from 'react-native-linear-gradient';
import {navPushTo} from '../components/navigation';
import {BrowseGenres} from '../components/BrowseGenres';

export default class Browse extends React.Component<IBaseComponent> {
  goToSearch = () => {
    navPushTo(this.props.componentId, 'Search');
  };

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme as Theme}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.6}}
            locations={[0, 0.25]}
            colors={['#3e5b73', '#121212']}
            useAngle={true}
            angle={145}
            angleCenter={{x: 0.5, y: 0.5}}
            style={theme.container as ViewStyle}>
            <BrowseGenres componentId={this.props.componentId} />
            <PlayerBar />
            <Player />
          </LinearGradient>
        </ThemeProvider>
      </Provider>
    );
  }
}
