import React from 'react';
import {View, Text, ViewStyle, Image} from 'react-native';
import {theme} from '../styles/theme';
import {ThemeProvider, Theme} from 'react-native-elements';
import {IHomeListItemProps} from './RenderHomeList';

export default class HomeListItem extends React.Component<IHomeListItemProps> {
  render() {
    const {image, textInfo} = this.props;
    const {trackName, albumName, artistName} = textInfo;
    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={theme.homeSection.recentlyPlayedListItem as ViewStyle}>
          {image ? (
            <Image
              style={theme.homeSection.recentlyPlayedListItem.img}
              source={{uri: image.url}}
            />
          ) : (
            <Image
              style={theme.homeSection.recentlyPlayedListItem.img}
              source={require('../assets/img/album.jpg')}
            />
          )}
          {trackName && (
            <Text
              style={
                theme.homeSection.recentlyPlayedListItem.trackName as ViewStyle
              }>
              {trackName}
            </Text>
          )}
          {albumName && (
            <Text
              style={
                theme.homeSection.recentlyPlayedListItem.albumInfo as ViewStyle
              }>
              {albumName}
            </Text>
          )}
          {artistName && (
            <Text
              style={
                theme.homeSection.recentlyPlayedListItem.albumInfo as ViewStyle
              }>
              {artistName}
            </Text>
          )}
        </View>
      </ThemeProvider>
    );
  }
}
