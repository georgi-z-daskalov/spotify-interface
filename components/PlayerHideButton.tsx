import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {theme} from '../styles/theme';
import ArrowDownIcon from './svg/ArrowDownIcon';

export const PlayerHideButton = ({onClick}: {onClick: () => void}) => {
  return (
    <TouchableOpacity style={theme.player.hidebutton as ViewStyle} onPress={onClick}>
      <ArrowDownIcon />
    </TouchableOpacity>
  );
};
