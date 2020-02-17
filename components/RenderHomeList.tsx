import React from 'react';
import {ScrollView, Text, View, FlatList, ViewStyle} from 'react-native';
import HomeListItem from './HomeListItem';
import {theme} from '../styles/theme';

interface IRenderHomeListProps {
  homeLists: string[];
}

interface IAlbumImage {
  height: number;
  url: string;
  width: number;
}

export interface IHomeListItemProps {
  image: IAlbumImage;
  textInfo: {
    trackName?: string;
    albumName?: string;
    artistName?: string;
  };
}

interface IHomeListProps {
  title: string;
  items: IHomeListItemProps[];
}
interface IArtist {
  name: string;
}

export interface ITrack {
  artists: IArtist[];
  album: IAlbum;
  name: string;
}

export interface IArtistProps {
  name: string;
  images: IAlbumImage[];
}

interface IAlbum {
  name: string;
  images: IAlbumImage[];
}

export default class RenderHomeList extends React.Component<
  IRenderHomeListProps
> {
  getRecentlyPlayedItems = (item: {track: ITrack}) => {
    const {name, artists, album} = item.track;
    return {
      image: album.images.find((img: IAlbumImage) => img.width === 300),
      textInfo: {
        trackName: name,
        artistName: artists[0].name,
      },
    };
  };
  getTopArtistsItems = (artist: IArtistProps) => {
    const {name, images} = artist;

    return {
      image: images.find((img: IAlbumImage) => img.width === 160) || images[0],
      textInfo: {
        artistName: name,
      },
    };
  };
  getRecentlyPlayedProps = (): IHomeListProps => {
    const recentlyPlayed = require('../assets/mock_server/recently_played');
    const items = recentlyPlayed.default.items;

    return {
      title: 'Recently played',
      items: items.map(this.getRecentlyPlayedItems),
    };
  };
  getTopArtistsProps = (): IHomeListProps => {
    const topArtists = require('../assets/mock_server/top_artists');
    const items = topArtists.default.items;

    return {
      title: 'Top artists',
      items: items.map(this.getTopArtistsItems),
    };
  };
  getPlaylistsProps = (): IHomeListProps => {
    const topArtists = require('../assets/mock_server/playlists');
    const items = topArtists.default.items;

    return {
      title: 'PlayLists',
      items: items.map(this.getTopArtistsItems),
    };
  };
  getHomeListProps(list: string) {
    let homeListProps = {} as IHomeListProps;
    switch (list) {
      case 'recently_played':
        homeListProps = this.getRecentlyPlayedProps();
        return this.renderHomeList(homeListProps);
      case 'top_artists':
        homeListProps = this.getTopArtistsProps();
        return this.renderHomeList(homeListProps);
      case 'playlists':
        homeListProps = this.getPlaylistsProps();
        return this.renderHomeList(homeListProps);
      default:
        null;
    }
  }

  renderHomeList(homeListType: IHomeListProps) {
    return (
      <View style={theme.homeSection}>
        <Text style={theme.homeSection.sectionHeader as ViewStyle}>
          {homeListType.title}
        </Text>
        <FlatList
          style={theme.homeSection.list}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item, index) => index + String(item)}
          data={homeListType.items}
          renderItem={({item}: {item: IHomeListItemProps}) => (
            <HomeListItem {...item} />
          )}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={theme.homeSection.scroll}>
        {this.props.homeLists.map((list: string) =>
          this.getHomeListProps(list),
        )}
      </ScrollView>
    );
  }
}
