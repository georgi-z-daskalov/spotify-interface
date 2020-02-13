import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeProvider, Theme} from 'react-native-elements';
import {IBaseComponent} from '../types/screens';
import {theme} from '../styles/theme';
import PlayerBar from '../components/PlayerBar';
import RenderHomeList from '../components/RenderHomeList';
import {getConfigHomeList} from '../utils/config';

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
      <ThemeProvider theme={theme as Theme}>
        <View style={[theme.container, theme.mainWrapper] as ViewStyle}>
          <RenderHomeList homeLists={getConfigHomeList()} />
          <PlayerBar />
        </View>
      </ThemeProvider>
    );
  }
}
