import React from 'react';
import {View, ViewStyle, Image, TouchableHighlight} from 'react-native';
import {theme} from '../styles/theme';

export const PlayerControls = () => (
  <View style={theme.player.controls as ViewStyle}>
    <TouchableHighlight style={theme.player.controls.shuffle as ViewStyle}>
      <Image
        source={require('../assets/img/album.jpg')}
        style={theme.player.controls.shuffle.image}
      />
    </TouchableHighlight>
    <TouchableHighlight style={theme.player.controls.previos as ViewStyle}>
      <Image
        source={require('../assets/img/album.jpg')}
        style={theme.player.controls.previos.image}
      />
    </TouchableHighlight>
    <TouchableHighlight style={theme.player.controls.play as ViewStyle}>
      <Image
        source={require('../assets/img/album.jpg')}
        style={theme.player.controls.play.image}
      />
    </TouchableHighlight>
    <TouchableHighlight style={theme.player.controls.next as ViewStyle}>
      <Image
        source={require('../assets/img/album.jpg')}
        style={theme.player.controls.next.image}
      />
    </TouchableHighlight>
    <TouchableHighlight style={theme.player.controls.repeat as ViewStyle}>
      <Image
        source={require('../assets/img/album.jpg')}
        style={theme.player.controls.repeat.image}
      />
    </TouchableHighlight>
  </View>
);
