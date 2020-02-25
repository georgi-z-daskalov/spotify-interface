import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeProvider, Theme} from 'react-native-elements';
import {IBaseComponent} from '../types/screens';
import {theme} from '../styles/theme';
import PlayerBar from '../components/PlayerBar';
import RenderHomeList from '../components/RenderHomeList';
import {getConfigHomeList} from '../utils/config';
import Player from './Player';
import {Provider} from 'react-redux';
import {store} from '../reducers/index';
import LinearGradient from 'react-native-linear-gradient';
import {SpotifyAuth} from './SpotifyAuth';

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
            <SpotifyAuth />
            <RenderHomeList homeLists={getConfigHomeList()} />
            <PlayerBar />
            <Player />
          </LinearGradient>
        </ThemeProvider>
      </Provider>
    );
  }
}
