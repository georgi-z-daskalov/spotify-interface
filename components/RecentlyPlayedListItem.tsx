import React from 'react';
import {View, Text, ViewStyle, Image} from 'react-native';
import {theme} from '../styles/theme';
import {ThemeProvider, Theme} from 'react-native-elements';

interface IRecentlyPlayedTrack {
  track: ITrack;
}

export interface ITrack {
  artists: IArtist[];
  album: IAlbum;
  name: string;
}

interface IArtist {
  name: string;
}

interface IAlbum {
  name: string;
  images: IAlbumImage[];
}

interface IAlbumImage {
  height: number;
  url: string;
  width: number;
}

export default class RecentlyPlayedListItem extends React.Component<
  IRecentlyPlayedTrack
> {
  render() {
    const {track} = this.props;
    const {name, artists, album} = track;

    console.log('name', name);

    const artistName: string = artists[0].name;
    const image = album.images.find((img: IAlbumImage) => img.width === 300);

    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={theme.homeSection.recentlyPlayedListItem as ViewStyle}>
          {image && (
            <Image
              style={theme.homeSection.recentlyPlayedListItem.img}
              source={{uri: image.url}}
            />
          )}
          <Text
            style={
              theme.homeSection.recentlyPlayedListItem.trackName as ViewStyle
            }>
            {name}
          </Text>
          <Text
            style={
              theme.homeSection.recentlyPlayedListItem.albumInfo as ViewStyle
            }>
            {artistName}
          </Text>
        </View>
      </ThemeProvider>
    );
  }
}
