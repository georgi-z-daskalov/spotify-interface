import React from 'react';
import {TouchableHighlight, Image, ViewStyle} from 'react-native';
import {theme} from '../styles/theme';

export const PlayerHideButton = ({onClick}: {onClick: () => void}) => {
  return (
    <TouchableHighlight
      style={theme.player.hidebutton as ViewStyle}
      onPress={onClick}>
      <Image
        source={require('../assets/img/arrow_down.png')}
        style={theme.player.hidebuttonimage}
      />
    </TouchableHighlight>
  );
};
