import React from 'react';
import {TouchableHighlight, Image} from 'react-native';

export const HidePlayerButton = ({onClick}: {onClick: () => void}) => {
  return (
    <TouchableHighlight onPress={onClick}>
      <Image
        source={require('../assets/img/arrow_down.png')}
        style={{width: 15, height: 15}}
      />
    </TouchableHighlight>
  );
};
