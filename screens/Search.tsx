import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../reducers/index';
import {ScrollView, ViewStyle, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Header, Input} from 'react-native-elements';
import recent_searches from '../assets/mock_server/recently_played';
import {theme, COLOR_START_PLAYER, COLOR_END_PLAYER} from '../styles/theme';
import {Navigation} from 'react-native-navigation';
import {SearchTile} from '../components/SearchTile';
import {IBaseComponent} from '../types/screens';
import ArrowLeftIcon from '../components/svg/ArrowLeftIcon';
import PlayerBar from '../components/PlayerBar';
import Player from './Player';

export default class Search extends React.Component<IBaseComponent> {
  goBack = () => {
    Navigation.pop(this.props.componentId);
  };

  render() {
    return (
      <Provider store={store}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.75}}
          colors={[COLOR_START_PLAYER, COLOR_END_PLAYER]}
          style={theme.player as ViewStyle}>
          <Header
            placement="left"
            statusBarProps={{translucent: true}}
            containerStyle={
              [
                Platform.select({
                  android: Platform.Version <= 20 ? {paddingTop: 0, height: 56} : {paddingTop: 0, height: 44},
                }),
                theme.search.top,
              ] as ViewStyle
            }
            leftComponent={
              <Button
                style={theme.search.back as ViewStyle}
                icon={<ArrowLeftIcon />}
                type="clear"
                onPress={this.goBack}
              />
            }
            centerComponent={
              <Input
                inputContainerStyle={theme.search.inputcontainer}
                inputStyle={theme.search.input}
                containerStyle={theme.search.inputcontainer}
              />
            }
          />
          <ScrollView contentContainerStyle={[theme.browsegenres.container, theme.search.scroll] as ViewStyle}>
            {recent_searches.items.map((track, index) => {
              const albumImg = track.track.album.images.find(img => img.height === 64);
              const albumImgSrc = albumImg ? {uri: albumImg.url} : require('../assets/img/album.jpg');

              return (
                <SearchTile
                  key={index + track.track.name}
                  album={track.track.album.name}
                  text={track.track.name}
                  image={albumImgSrc}
                />
              );
            })}
          </ScrollView>
          <PlayerBar />
          <Player />
        </LinearGradient>
      </Provider>
    );
  }
}
