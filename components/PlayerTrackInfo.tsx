import React, {useState} from 'react';
import {View, ViewStyle, Text, TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';
import {theme, PRIMARY_COLOR, LIGHT_GREY_COLOR} from '../styles/theme';
import HeartIcon from './svg/HeartIcon';

export const PlayerTrackInfo = () => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
    Toast.show(isSaved ? 'Removed from Liked Songs' : 'Added to Liked Songs');
  };

  return (
    <View style={theme.player.trackinfo as ViewStyle}>
      <View style={theme.player.trackinfo.text as ViewStyle}>
        <Text style={theme.player.trackinfo.text.trackname as ViewStyle}>Current track name</Text>
        <Text style={theme.player.trackinfo.text.albumname}>Current track album name</Text>
      </View>
      <View style={theme.player.trackinfo.save as ViewStyle}>
        <TouchableOpacity style={theme.player.trackinfo.save.button} onPress={toggleSave}>
          <HeartIcon fillColor={isSaved ? PRIMARY_COLOR : LIGHT_GREY_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
