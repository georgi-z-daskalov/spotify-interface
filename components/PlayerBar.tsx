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
import currentTrack from '../assets/mock_server/current_track';

export default class PlayerBar extends React.Component {
  state = {
    isPlaying: false,
    isLiked: false,
  };

  togglePlay = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  };

  toggleIsLiked = () => {
    this.setState({
      isLiked: !this.state.isLiked,
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
      (Number(currentContext.progress_ms) / Number(currentTrack.duration_ms)) *
        100 +
      '%';

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
            <Image
              style={theme.playerBar.album}
              source={require('../assets/img/album.jpg')}
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={theme.playerBar.infoText as ViewStyle}>
              <TouchableOpacity style={theme.oneLineText as ViewStyle}>
                <Text style={theme.playerBar.infoText.song as TextStyle}>
                  {currentContext.item.name}
                </Text>
                <Text style={theme.playerBar.infoText.artist as TextStyle}>
                  {' '}
                  · {currentContext.item.artists[0]}{' '}
                  {currentContext.item.artists[0]}{' '}
                  {currentContext.item.artists[0]}{' '}
                  {currentContext.item.artists[0]}{' '}
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
