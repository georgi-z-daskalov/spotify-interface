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

enum HomeListTypes {
  RECENTLY_PLAYED,
  TOP_ARTISTS,
  PLAYLISTS,
}

const getListType = (list: string): HomeListTypes => {
  switch (list) {
    case 'recently_played':
      return HomeListTypes.RECENTLY_PLAYED;
    case 'top_artists':
      return HomeListTypes.TOP_ARTISTS;
    case 'playlists':
      return HomeListTypes.PLAYLISTS;
    default:
      return HomeListTypes.RECENTLY_PLAYED;
  }
};

export default class RenderHomeList extends React.Component<IRenderHomeListProps> {
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
    switch (getListType(list)) {
      case HomeListTypes.RECENTLY_PLAYED:
        homeListProps = this.getRecentlyPlayedProps();
        return this.renderHomeList(homeListProps, list);
      case HomeListTypes.TOP_ARTISTS:
        homeListProps = this.getTopArtistsProps();
        return this.renderHomeList(homeListProps, list);
      case HomeListTypes.PLAYLISTS:
        homeListProps = this.getPlaylistsProps();
        return this.renderHomeList(homeListProps, list);
      default:
        null;
    }
  }

  renderHomeList(homeListType: IHomeListProps, listType: string) {
    return (
      <View key={listType} style={theme.homeSection}>
        <Text style={theme.homeSection.sectionHeader as ViewStyle}>{homeListType.title}</Text>
        <FlatList
          style={theme.homeSection.list}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item, index) => index + JSON.stringify(item)}
          data={homeListType.items}
          renderItem={({item}: {item: IHomeListItemProps}) => <HomeListItem {...item} />}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={theme.homeSection.scroll}>
        {this.props.homeLists.map((list: string) => this.getHomeListProps(list))}
      </ScrollView>
    );
  }
}
