import React from 'react';
import {View, ViewStyle, Modal} from 'react-native';
import {ThemeProvider, Theme} from 'react-native-elements';
import {RootState} from '../reducers/index';
import {connect, ConnectedProps} from 'react-redux';
import {PlayerHeader} from '../components/PlayerHeader';
import {PlayerAlbum} from '../components/PlayerAlbum';
import {PlayerActions} from '../types/actions';
import {IPlayerBarState} from '../components/PlayerBar';
import currentContext from '../assets/mock_server/currently_playing_context';
import {PlayerTrackInfo} from '../components/PlayerTrackInfo';
import {PlayerSlider} from '../components/PlayerSlider';
import {PlayerControls} from '../components/PlayerControls';
import {theme} from '../styles/theme';

interface IPlayerState extends IPlayerBarState {
  progress: number;
}

class Player extends React.Component<IPlayerProps, IPlayerState> {
  state: IPlayerState = {
    isPlaying: currentContext.item.is_playing,
    isLiked: currentContext.item.item.is_local,
    progress: 6000,
  };

  hidePlayer = () => this.props.dispatch({type: PlayerActions.HIDE_PLAYER});

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}>
        <ThemeProvider theme={theme as Theme}>
          <View style={theme.player as ViewStyle}>
            <PlayerHeader hidePlayer={this.hidePlayer} />
            <PlayerAlbum />
            <PlayerTrackInfo />
            <PlayerSlider />
            <PlayerControls />
          </View>
        </ThemeProvider>
      </Modal>
    );
  }
}

const mapState = (state: RootState) => ({
  isVisible: state.player.isVisible,
});
const connector = connect(mapState);
type IPlayerProps = ConnectedProps<typeof connector>;

export default connector(Player);
