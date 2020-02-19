import React, {useState} from 'react';
import {View, ViewStyle, TouchableOpacity} from 'react-native';
import {theme, LIGHT_GREY_COLOR, MEDIUM_GREY_COLOR} from '../styles/theme';
import ShuffleIcon from './svg/ShuffleIcon';
import PrevIcon from './svg/PrevIcon';
import PlayIconBig from './svg/PlayIconBig';
import PauseIconBig from './svg/PauseIconBig';
import NextIcon from './svg/NextIcon';
import RepeatIcon from './svg/RepeatIcon';

export const PlayerControls = () => {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [play, setPlay] = useState(false);

  const toggleShuffle = () => {
    setShuffle(!shuffle);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  const toggleRepeat = () => {
    setRepeat(!repeat);
  };

  return (
    <View style={theme.player.controls as ViewStyle}>
      <TouchableOpacity onPress={toggleShuffle} style={theme.player.controls.button as ViewStyle}>
        <ShuffleIcon fillColor={shuffle ? LIGHT_GREY_COLOR : MEDIUM_GREY_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity style={theme.player.controls.button as ViewStyle}>
        <PrevIcon />
      </TouchableOpacity>
      <TouchableOpacity style={theme.player.controls.buttonBig as ViewStyle} onPress={togglePlay}>
        {play ? <PlayIconBig /> : <PauseIconBig />}
      </TouchableOpacity>
      <TouchableOpacity style={theme.player.controls.button as ViewStyle}>
        <NextIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleRepeat} style={theme.player.controls.button as ViewStyle}>
        <RepeatIcon fillColor={repeat ? LIGHT_GREY_COLOR : MEDIUM_GREY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};
