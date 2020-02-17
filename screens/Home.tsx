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
          <View style={[theme.container, theme.mainWrapper] as ViewStyle}>
            <RenderHomeList homeLists={getConfigHomeList()} />
            <PlayerBar />
            <Player />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}
