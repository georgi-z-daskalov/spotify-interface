import React, {useState} from 'react';
import {View, ViewStyle, Image, Text, TouchableHighlight} from 'react-native';
import Toast from 'react-native-simple-toast';
import {theme} from '../styles/theme';
import {IPlayerBarState} from './PlayerBar';

export const PlayerTrackInfo = () => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
    Toast.show(isSaved ? 'Removed from Liked Songs' : 'Added to Liked Songs');
  };

  const isLikedImg = isSaved
    ? require('../assets/img/heart_active.png')
    : require('../assets/img/heart.png');

  return (
    <View style={theme.player.trackinfo as ViewStyle}>
      <View style={theme.player.trackinfo.text as ViewStyle}>
        <Text style={theme.player.trackinfo.text.trackname as ViewStyle}>
          Current track name
        </Text>
        <Text style={theme.player.trackinfo.text.albumname}>
          Current track album name
        </Text>
      </View>
      <View style={theme.player.trackinfo.save as ViewStyle}>
        <TouchableHighlight
          style={theme.player.trackinfo.save.button}
          onPress={toggleSave}>
          <Image
            source={isLikedImg}
            style={theme.player.trackinfo.save.button}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};
