import React from 'react';
import {
  View,
  TouchableHighlight,
  ViewStyle,
  TextStyle,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Image, ThemeProvider, Text, Theme} from 'react-native-elements';
import {displayPlayer} from '../components/navigation';
import {theme} from '../styles/theme';
import currentContext from '../assets/mock_server/currently_playing_context';
import Toast from 'react-native-simple-toast';

interface IPlayerBarState {
  isPlaying: boolean;
  isLiked: boolean;
}

export default class PlayerBar extends React.Component<null, IPlayerBarState> {
  state: IPlayerBarState = {
    isPlaying: currentContext.item.is_playing,
    isLiked: currentContext.item.item.is_local,
  };

  togglePlay = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  };

  toggleIsLiked = () => {
    this.setState((prevState: IPlayerBarState) => {
      Toast.show(
        prevState.isLiked ? 'Removed from Liked Songs' : 'Added to Liked Songs',
      );
      return {
        isLiked: !prevState.isLiked,
      };
    });
  };

  render() {
    const playPauseImg = this.state.isPlaying
      ? require('../assets/img/play.png')
      : require('../assets/img/pause.png');
    const isLikedImg = this.state.isLiked
      ? require('../assets/img/heart_active.png')
      : require('../assets/img/heart.png');
    const trackCurrentPosition: string =
      (Number(currentContext.item.progress_ms) /
        Number(currentContext.item.item.duration_ms)) *
        100 +
      '%';
    const albumName = currentContext.item.item.album.name;
    const albumCover = currentContext.item.item.album.images.find(
      img => img.height === 64,
    );
    const artistName = currentContext.item.item.artists[0].name;

    return (
      <ThemeProvider theme={theme as Theme}>
        <TouchableHighlight
          style={theme.playerBarWrap as ViewStyle}
          onPress={displayPlayer}>
          <View style={theme.playerBar as ViewStyle}>
            <View
              style={
                [
                  theme.playerBar.trackPosition,
                  {width: trackCurrentPosition},
                ] as ViewStyle
              }
            />
            {albumCover && (
              <Image
                style={theme.playerBar.album}
                source={{uri: albumCover.url}}
              />
            )}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={theme.playerBar.infoText as ViewStyle}>
              <TouchableOpacity style={theme.oneLineText as ViewStyle}>
                <Text style={theme.playerBar.infoText.song as TextStyle}>
                  {artistName}
                </Text>
                <Text style={theme.playerBar.infoText.artist as TextStyle}>
                  {' '}
                  · {albumName}
                </Text>
              </TouchableOpacity>
            </ScrollView>
            <TouchableHighlight onPress={this.toggleIsLiked}>
              <Image style={theme.playerBar.buttons} source={isLikedImg} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this.togglePlay}>
              <Image style={theme.playerBar.buttons} source={playPauseImg} />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
      </ThemeProvider>
    );
  }
}
