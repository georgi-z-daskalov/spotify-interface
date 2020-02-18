import React from 'react';
import {Header} from 'react-native-elements';
import {ViewStyle, Platform} from 'react-native';
import {PlayerHideButton} from './PlayerHideButton';
import {theme} from '../styles/theme';

export const PlayerHeader = ({hidePlayer}: {hidePlayer: () => void}) => (
  <Header
    statusBarProps={{translucent: true}}
    containerStyle={[
      Platform.select({
        android:
          Platform.Version <= 20
            ? {paddingTop: 0, height: 56}
            : {paddingTop: 0, height: 44},
      }),
      theme.player.header,
    ]}
    leftComponent={<PlayerHideButton onClick={hidePlayer} />}
    centerComponent={{
      text: 'Current track name',
      style: theme.player.infotext as ViewStyle,
    }}
  />
);
