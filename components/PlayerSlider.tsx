import React, {useState} from 'react';
import {View, ViewStyle, Modal, Image, TouchableHighlight} from 'react-native';
import {Text, Slider} from 'react-native-elements';
import {theme} from '../styles/theme';

const TRACK_LENGTH = 360000;

const millisToMinutesAndSeconds = (millis: number): string => {
  const minutes = Math.floor(millis / 60000);
  const seconds = (millis % 60000) / 1000;
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0);
};

export const PlayerSlider = () => {
  const [progress, setProgress] = useState(0);

  return (
    <View style={theme.player.slider as ViewStyle}>
      <Slider
        thumbStyle={theme.player.slider.thumb}
        trackStyle={theme.player.slider.track}
        minimumValue={0}
        maximumValue={TRACK_LENGTH}
        value={progress}
        onValueChange={value => setProgress(value)}
        minimumTrackTintColor={'#ffffff'}
        maximumTrackTintColor={'#666666'}
      />
      <View style={theme.player.slider.text as ViewStyle}>
        <Text>{millisToMinutesAndSeconds(progress)}</Text>
        <Text>{millisToMinutesAndSeconds(TRACK_LENGTH)}</Text>
      </View>
    </View>
  );
};
