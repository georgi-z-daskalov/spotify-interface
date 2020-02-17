import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Button} from 'react-native-elements';
import {TouchableHighlight, Image} from 'react-native';

const hidePlayer = (id: string): void => {
  Navigation.dismissOverlay(id);
};
export const HidePlayerButton = ({componentId}: {componentId: string}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        hidePlayer(componentId);
      }}>
      <Image
        source={require('../assets/img/arrow_down.png')}
        style={{width: 15, height: 15}}
      />
    </TouchableHighlight>
  );
};
