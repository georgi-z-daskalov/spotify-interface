import React from 'react';
import {View, TouchableOpacity, ViewStyle, TextStyle, ScrollView} from 'react-native';
import {Image, ThemeProvider, Text, Theme} from 'react-native-elements';
import {theme, PRIMARY_COLOR, LIGHT_GREY_COLOR} from '../styles/theme';
import currentContext from '../assets/mock_server/currently_playing_context';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import {IBaseComponent} from '../types/screens';
import {AppDispatch} from '../reducers';
import {PlayerActions} from '../types/actions';
import HeartIcon from './svg/HeartIcon';
import PlayIcon from './svg/PlayIcon';
import PauseIcon from './svg/PauseIcon';

export interface IPlayerBarState {
  isPlaying: boolean;
  isLiked: boolean;
}

interface IPlayerBarProps extends IBaseComponent {
  dispatch: AppDispatch;
}

export class PlayerBar extends React.Component<IPlayerBarProps, IPlayerBarState> {
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
      Toast.show(prevState.isLiked ? 'Removed from Liked Songs' : 'Added to Liked Songs');
      return {
        isLiked: !prevState.isLiked,
      };
    });
  };

  displayPlayer = () => {
    this.props.dispatch({type: PlayerActions.SHOW_PLAYER});
  };

  render() {
    const trackCurrentPosition: string =
      (Number(currentContext.item.progress_ms) / Number(currentContext.item.item.duration_ms)) * 100 + '%';
    const albumName = currentContext.item.item.album.name;
    const albumCover = currentContext.item.item.album.images.find(img => img.height === 64);
    const artistName = currentContext.item.item.artists[0].name;

    return (
      <ThemeProvider theme={theme as Theme}>
        <TouchableOpacity style={theme.playerBarWrap as ViewStyle} onPress={this.displayPlayer}>
          <View style={theme.playerBar as ViewStyle}>
            <View style={[theme.playerBar.trackPosition, {width: trackCurrentPosition}] as ViewStyle} />
            {albumCover && <Image style={theme.playerBar.album} source={{uri: albumCover.url}} />}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={theme.playerBar.infoText as ViewStyle}>
              <TouchableOpacity style={theme.oneLineText as ViewStyle}>
                <Text style={theme.playerBar.infoText.song as TextStyle}>{artistName}</Text>
                <Text style={theme.playerBar.infoText.artist as TextStyle}> · {albumName}</Text>
              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={theme.playerBar.buttons} onPress={this.toggleIsLiked}>
              <HeartIcon fillColor={this.state.isLiked ? PRIMARY_COLOR : LIGHT_GREY_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity style={theme.playerBar.buttons} onPress={this.togglePlay}>
              {this.state.isPlaying ? <PlayIcon /> : <PauseIcon />}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ThemeProvider>
    );
  }
}

export default connect<IPlayerBarProps, AppDispatch>(null)(PlayerBar);
