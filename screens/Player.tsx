import React from 'react';
import {View, ViewStyle, Modal} from 'react-native';
import {Button, ThemeProvider, Theme, Text} from 'react-native-elements';
import {theme} from '../styles/theme';
import {HidePlayerButton} from '../components/HidePlayerButton';
import {RootState} from '../reducers/index';
import {connect, ConnectedProps} from 'react-redux';
import {PlayerActions} from '../types/actions';

class Player extends React.Component<IPlayerProps> {
  hidePlayer = () => this.props.dispatch({type: PlayerActions.HIDE_PLAYER});

  render() {
    return (
      <ThemeProvider theme={theme as Theme}>
        <View style={theme.player as ViewStyle}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isVisible}>
            <View>
              <HidePlayerButton onClick={this.hidePlayer} />
              <Text>Current track name</Text>
            </View>
            <Button title="Hide Player" onPress={this.hidePlayer} />
          </Modal>
        </View>
      </ThemeProvider>
    );
  }
}

const mapState = (state: RootState) => ({
  isVisible: state.player.isVisible,
});
const connector = connect(mapState);
type IPlayerProps = ConnectedProps<typeof connector>;

export default connector(Player);
