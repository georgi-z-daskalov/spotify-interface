import React from 'react';
import {View, ViewStyle, Image} from 'react-native';
import {theme} from '../styles/theme';

export const PlayerAlbum = () => (
  <View style={theme.player.album as ViewStyle}>
    <Image
      resizeMode="contain"
      source={require('../assets/img/album.jpg')}
      style={theme.player.albumimage}
    />
  </View>
);
